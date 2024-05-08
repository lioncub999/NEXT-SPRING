'use client'

import {TEST} from "@/apis";
import styles from "./auth.module.css"
import React, {useState} from "react";
import classNames from "classnames";

export default function Auth() {

    async function testLogin() {
        const data = await TEST.testLogin();
        console.log(data)
    }

    const [loginOrSignin, setLoginOrSignin] = useState(true)

    return (
        <main className={styles.main}>
            <div className={styles.formStructor} style={{borderRadius: "15px"}}>
                <section className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={classNames({[styles.signup]: true, [styles.slideUp]: loginOrSignin})} id="signup-slide">
                            <h2 className={styles.formTitle} id="signup" onClick={function() {
                                setLoginOrSignin(false);
                            }}><span className={styles.span}>or</span>회원가입
                            </h2>
                            <div className={styles.formHolder}>
                                <form className="frm" id="signup-frm">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <input type="text" className={styles.input} id="signupUserNm"
                                               placeholder="이름"
                                               name="userNm"
                                               style={{width : "160px"}}
                                        />
                                        <button type="button" className={styles.dupcheckBtn}
                                        >
                                            중복확인
                                        </button>
                                        <input type="text" id="dupcheck" name="dupcheck" hidden/>
                                        <div className="loading">
                                            <div>

                                            </div>
                                        </div>
                                        <div className="dupcheckComp">

                                        </div>
                                    </div>
                                    <input type="password" className={styles.input} id="signupUserPw" placeholder="비밀번호"
                                           name="userPw"/>
                                    <input type="password" className={styles.input} id="userPwCheck"
                                           placeholder="비밀번호 확인"/>
                                </form>
                            </div>
                            <button className={styles.submitBtn} id="submit-btn" type="button"
                            >Sign Up
                            </button>
                        </div>

                        <div className={classNames({[styles.login]: true, [styles.slideUp]: !loginOrSignin})} id="login-slide">
                            <div className={styles.center}>
                                <h2 className={styles.formTitle} id="login" onClick={function() {
                                    setLoginOrSignin(true);
                                }}><span className={styles.span}>or</span>로그인</h2>
                                <div className={styles.formHolder}>
                                    <form className="frm" id="login-frm">
                                        <input type="email" className={styles.input} id="loginUserNm" placeholder="이름"
                                               name="userNm"/>
                                        <input type="password" className={styles.input} id="loginUserPw" placeholder="비밀번호"
                                               name="userPw"/>
                                    </form>
                                </div>
                                <button className={styles.submitBtn} type="button">Log in
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContent} style={{objectFit: "cover"}}>
                        <img src="./test.gif" alt="설명" style={{width: "330px", height: "810px"}}/>
                    </div>
                </section>
            </div>
        </main>
    )
}