import React from "react";
import './topbar.css';
import UserImg from '../properties/img/test-user.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Topbar(): JSX.Element {
    return (

        <>
            <div className="topbar">
                <div className="topbar-user-img">
                        <img src={UserImg} alt="" />
                </div>
                <div className="extraSpace"></div>
            </div>
        </>

    );
}