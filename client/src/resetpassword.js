import { Component } from "react";
import { Link } from "react-router-dom";

export default class Reset extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            view: 1,
        };
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log("this.state", this.state)
        );
    }

    handleSubmit1() {
        console.log("Clicked on submit btton 1");
        fetch("/password/reset/start", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.success) {
                    this.setState({
                        error: false,
                        view: 2,
                    });
                } else {
                    this.setState({
                        error: true,
                    });
                }
            })
            .catch((error) => {
                console.log("Error in  handle submit1", error);
                this.setState({
                    error: true,
                });
            });
    }
    handleSubmit2() {
        console.log("Clicked on submit btton 2");
        fetch("/password/reset/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.success) {
                    this.setState({
                        error: false,
                        view: 3,
                    });
                } else {
                    this.setState({
                        error: true,
                        view: 2,
                    });
                }
            })
            .catch((error) => {
                console.log("Error in  handle submit1", error);
                this.setState({
                    error: true,
                });
            });
    }

    determineViewToRender() {
        // this method determines what the render!
        if (this.state.view === 1) {
            return (
                <div id="view1">
                    <br></br>
                    <br></br>
                    <p>Enter your registered email.</p>
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button type="submit" onClick={() => this.handleSubmit1()}>
                        Submit
                    </button>
                </div>
            );
        } else if (this.state.view === 2) {
            return (
                <div id="reset_pwd">
                    <br></br>
                    <br></br>
                    <p>Enter your new password and code.</p>
                    <br></br>

                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type="text"
                        name="code"
                        placeholder="code"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <button type="submit" onClick={() => this.handleSubmit2()}>
                        Submit
                    </button>
                </div>
            );
        } else if (this.state.view === 3) {
            // remember to also add a link to login ;)
            return (
                <div id="view3">
                    <br></br>
                    <p>Password reset successful.
                        Login with your new password.
                        <Link to="/login">Click here to Log in.</Link>
                    </p>
                </div>
            );
        }
    }

    render() {
        return <div>{this.determineViewToRender()}</div>;
    }
}
