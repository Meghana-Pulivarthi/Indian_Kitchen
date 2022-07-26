import { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";



export default class App extends Component {
    constructor() {
        super();
        this.state = {
            first: "abd",
            last: "xcv",
            uploadIsVisible: false,
        };
    }
    componentDidMount() {
        // console.log("App mounted");

        // fetch("/user")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         // console.log("data in /users", data);
        //         this.setState({
        //             first: data.userInfo.first,
        //             last: data.userInfo.last,
        //         });
        //     });
    }
    toggleModal() {
        console.log("togglemodal running");
        this.setState({
            uploadIsVisible: !this.state.uploadIsVisible,
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h3>About us.</h3>
                </div>
            </BrowserRouter>
        );
    }
}
