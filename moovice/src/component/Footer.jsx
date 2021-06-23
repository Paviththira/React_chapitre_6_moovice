import React from "react";
import '../Styles/Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    <div className="col">
                        <h4>SP</h4>
                        <h5 className="list-unstyled">
                            <li>France</li>
                            <li>24avenue de rosny</li>
                        </h5>
                    </div>

                    <div className="col">
                        <h4>Help</h4>
                        <ui className="list-unstyled">
                            <li>About us </li>
                            <li>Contact</li>
                            <li>profile</li>
                        </ui>
                    </div>

                    <div className="col">
                        <h4>Browse</h4>
                        <ui className="list-unstyled">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Profile</li>
                        </ui>
                    </div>

                </div>
                <hr />
                <div className="row" style={{ textAlign: "center" }}>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Copyright SP
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;