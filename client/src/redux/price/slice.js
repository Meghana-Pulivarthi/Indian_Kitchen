export default function priceReducer(price = [], action) {
    console.log({ price, action });
    if (action.type === "/payment") {
        price = action.payload.totalPrice;
        console.log("totalPrice in slice", price);
    }
    return messages;
}
// Action Creators ---------------------------------------------
export function priceRecieved(totalPrice) {
    return {
        type: "/payment",
        payload: { totalPrice },
    };
}

