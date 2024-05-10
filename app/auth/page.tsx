'use client'

import {auth, TEST} from "@/apis";
import styles from "./auth.module.css"
import React, {useEffect, useState} from "react";
import classNames from "classnames";

export default function Auth(props: any) {

    //TODO: PAGE Ctl
    const [loginOrSignin, setLoginOrSignin] = useState(true)
    const [dupCheckState, setDupCheckState] = useState<boolean>(false);
    const [loadingState, setLoadingState] = useState(false)
    const [dupCheckComplete, setDupCheckComplete] = useState(false)

    //TODO: AXIOS
    const [registerNm, setRegisterNm] = useState<string>('')

    //TODO: 이름 한글인지 체크
    function koreanRegexTest(input: string) {
        var koreanRegex = /^[가-힣]*([^ㄱ-ㅎㅏ-ㅣ]{2,})[가-힣]*$/;
        return koreanRegex.test(input) && !/[a-zA-Z]/.test(input);
    }

    //TODO: 중복확인 AXIOS
    async function dupCheck() {
        if (registerNm == '' || registerNm == null) {
            await props.toastOn("이름을 입력 하세요", 'warn');
        } else {
            if (koreanRegexTest(registerNm)) {
                setLoadingState(true);
                const data = await auth.dupCheck(registerNm);
                if (data.data) {
                    await props.toastOn("사용 가능한 아이디 입니다.", 'success');
                    setDupCheckState(true);
                    setLoadingState(true);
                    setDupCheckComplete(true);
                } else {
                    await props.toastOn("중복된 아이디가 있습니다.", 'warn');
                    setLoadingState(false);
                }
            } else {
                await props.toastOn("정확한 이름을 입력 해주세요.", 'warn');
            }
        }
    }

    useEffect(
        function () {
        }, []
    )

    return (
        <main className={styles.main}>
            <div className={styles.formStructor} style={{borderRadius: "15px"}}>
                <section className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={classNames({[styles.signup]: true, [styles.slideUp]: loginOrSignin})}
                             id="signup-slide">
                            <h2 className={styles.formTitle} id="signup" onClick={function () {
                                setLoginOrSignin(false);
                            }}><span className={styles.span}>or</span>회원가입
                            </h2>
                            <div className={styles.formHolder}>
                                <form className="frm" id="signup-frm">
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <input type="text" className={styles.input} id="signupUserNm"
                                               placeholder="이름"
                                               name="userNm"
                                               style={{width: "160px"}}
                                               onChange={function (e) {
                                                   setRegisterNm(e.target.value)
                                               }}
                                               disabled={dupCheckComplete}
                                        />
                                        <div style={{width: "70px", alignItems:"center"}}>
                                            {
                                                dupCheckState ?
                                                    <div className="dupcheckComp" style={{textAlign:"center"}}>
                                                        <img src="./image/asset/check.png" alt="" width={35}
                                                             height={35}/>
                                                    </div>
                                                    :
                                                    <>
                                                        {
                                                            loadingState ?
                                                                <div className="loading" style={{textAlign:"center"}}>
                                                                    <img src="./image/asset/loading.gif" alt=""/>
                                                                </div>
                                                                :
                                                                <button type="button" className={styles.dupcheckBtn}
                                                                        onClick={function () {
                                                                            dupCheck();
                                                                        }}
                                                                >
                                                                    중복확인
                                                                </button>
                                                        }
                                                    </>
                                            }
                                        </div>
                                    </div>
                                    <input type="password" className={styles.input} id="signupUserPw"
                                           placeholder="비밀번호"
                                           name="userPw"/>
                                    <input type="password" className={styles.input} id="userPwCheck"
                                           placeholder="비밀번호 확인"/>
                                </form>
                            </div>
                            <button className={styles.submitBtn} id="submit-btn" type="button"
                                    onClick={function () {
                                        TEST.getTest();
                                    }}
                            >Sign Up
                            </button>
                        </div>

                        <div className={classNames({[styles.login]: true, [styles.slideUp]: !loginOrSignin})}
                             id="login-slide">
                            <div className={styles.center}>
                                <h2 className={styles.formTitle} id="login" onClick={function () {
                                    setLoginOrSignin(true);
                                }}><span className={styles.span}>or</span>로그인</h2>
                                <div className={styles.formHolder}>
                                    <form className="frm" id="login-frm">
                                        <input type="email" className={styles.input} id="loginUserNm" placeholder="이름"
                                               name="userNm"/>
                                        <input type="password" className={styles.input} id="loginUserPw"
                                               placeholder="비밀번호"
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