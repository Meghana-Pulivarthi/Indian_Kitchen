import { BrowserRouter, Route } from "react-router-dom";

import Registration from "./registration";
import Login from "./login";
import Reset from "./resetpassword";

export default function Welcome() {
    return (
        <div>
            <header className="headerWelcome">
                <img id="loginlogo" src="./logo.jpg" alt="logo"></img>
                <p>&emsp;&emsp;&emsp;&emsp;&emsp;</p>

                <h2 id="intro">The Great Indian Kitchen</h2>
            </header>

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
            <footer className="footerWelcome">
                <p>
                    © Copyright  2022 by Meghana Pulivarthi. All Rights Reserved. 
                </p>
            </footer>
        </div>
    );
}
