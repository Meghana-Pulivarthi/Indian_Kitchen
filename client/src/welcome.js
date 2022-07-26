import { BrowserRouter, Route } from "react-router-dom";

import Registration from "./registration";
import Login from "./login";
import Reset from "./resetpassword";

export default function Welcome() {
    return (
        <div>
            {/* <header>
                <img id="logomain" src="/logo.jpg" alt="logo" />
            </header> */}
            <h2 id="intro">Welcome to The Great Indian Kitchen</h2>

            <BrowserRouter>
                <div>
                    <Route exact path="/">
                        <Registration />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/reset">
                        <Reset />
                    </Route>
                </div>
            </BrowserRouter>
        </div>
    );
}
