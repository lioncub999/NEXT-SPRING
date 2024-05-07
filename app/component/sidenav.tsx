'use client'

import React from "react";
import {faHouse, faUser, faCalendar, faSliders, faSignOut} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Sidenav(props: any) {
    return (
        <nav className={"main-menu"}>
            <h1>RulletMan</h1>
            <img src="/logo.png" alt="설명" />
            <ul>
                <li className="nav-item active">
                    <b></b>
                    <b></b>
                    <div className="nav-cont">
                        <FontAwesomeIcon icon={faHouse} className={"nav-icon"}/>
                        <span className="nav-text">홈</span>
                    </div>
                </li>

                <li className="nav-item">
                    <b></b>
                    <b></b>
                    <div className="nav-cont">
                        <FontAwesomeIcon icon={faUser} className={"nav-icon"}/>
                        <span className="nav-text">내정보</span>
                    </div>
                </li>

                <li className="nav-item">
                    <b></b>
                    <b></b>
                    <div className="nav-cont">
                        <FontAwesomeIcon icon={faCalendar} className={"nav-icon"}/>
                        <span className="nav-text">게시판</span>
                    </div>
                </li>

                <li className="nav-item">
                    <b></b>
                    <b></b>
                    <div className="nav-cont">
                        <FontAwesomeIcon icon={faSliders} className={"nav-icon"}/>
                        <span className="nav-text">설정</span>
                    </div>
                </li>

                <li className="nav-item">
                    <b></b>
                    <b></b>
                    <div className="nav-cont">
                        <FontAwesomeIcon icon={faSignOut} className={"nav-icon"}/>
                        <span className="nav-text">로그아웃</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}