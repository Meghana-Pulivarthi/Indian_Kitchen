const spicedPg = require("spiced-pg");
const database = "indiankitchen";
const username = "postgres";
const password = "postgres";

const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${username}:${password}@localhost:5432/${database}`
);

console.log("[db] connecting to:", database);

module.exports.addUser = (first, last, email, password) => {
    // console.log(first, last, email);
    const q = `INSERT INTO users (first,last, email, password) 
    VALUES ($1,$2,$3,$4) 
    RETURNING *`;
    const param = [first, last, email, password];
    return db.query(q, param);
};

module.exports.getEmail = (email) => {
    return db.query(
        `SELECT * 
        FROM users
    WHERE email = $1`,
        [email]
    );
};

module.exports.verifyEmail = (email, secretCode) => {
    const q = `INSERT INTO reset_codes (email,code) 
    VALUES ($1,$2) 
    RETURNING *`;
    const param = [email, secretCode];
    return db.query(q, param);
};

module.exports.verifyCode = (email) => {
    const q = `SELECT code FROM reset_codes
WHERE CURRENT_TIMESTAMP - created_at < INTERVAL '10 minutes'
AND  email=$1`;
    const param = [email];
    return db.query(q, param);
};

module.exports.newPwd = (password, email) => {
    return db.query(
        `UPDATE users
SET password=$1
WHERE email=$2
RETURNING * ;`,
        [password, email]
    );
};

module.exports.getmatchingproducts = (val) => {
    return db.query(
        `SELECT * FROM products
    WHERE first ILIKE $1;`,
        [val + "%"]
    );
};

module.exports.getProducts = () => {
    return db.query(`SELECT * FROM products WHERE id=$1`);
};
