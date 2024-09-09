import React from 'react';
import './topbar.css';
import UserImg from '../properties/img/test-user.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-user-img">
                <img src={UserImg} alt="User" />
            </div>
            <div className="topbar-text">
                <h1>GPA Calculator</h1>
            </div>
        </div>
    );
}