'use client'

import {auth, TEST} from "@/apis";
import styles from "./auth.module.css"
import React, {useEffect, useState} from "react";
import classNames from "classnames";

export default function Auth(props: any) {

    //TODO: PAGE Ctl
    const [loginOrSignin, setLoginOrSignin] = useState<boolean>(true)
    const [dupCheckState, setDupCheckState] = useState<boolean>(false);
    const [loadingState, setLoadingState] = useState<boolean>(false)
    const [registerPw2, setRegisterPw2] = useState<string>('')
    const [regComp, setRegisterComplete] = useState<boolean>(false)

    //TODO: AXIOS
    const [registerNm, setRegisterNm] = useState<string>('')
    const [registerPw, setRegisterPw] = useState<string>('')
    const [loginNm, setLoginNm] = useState<string>('')
    const [loginPw, setLoginPw] = useState<string>('')

    //TODO: 이름 한글인지 체크
    function koreanRegexTest(input: string) {
        var koreanRegex = /^[가-힣]*$/;
        return koreanRegex.test(input);
    }

    //TODO: 중복확인 AXIOS
    async function dupCheck() {
        if (registerNm == '' || registerNm == null) {
            await props.toastOn("이름을 입력 하세요", 'warn');
        } else {
            if (koreanRegexTest(registerNm)) {
                setLoadingState(true);
                try {
                    const data = await auth.dupCheck(registerNm)
                    if (data.data) {
                        await props.toastOn("등록 가능한 이름 입니다.", "success");
                        setDupCheckState(true);
                    } else {
                        await props.toastOn("중복된 이름이 있습니다.", "warn");
                    }
                } catch (error) {
                    props.toastOn("네트워크 오류 - 관리자 문의", "error")
                }
                setLoadingState(false);
            } else {
                await props.toastOn("정확한 이름을 입력 해주세요.", "warn");
            }
        }
    }

    //TODO: 회원가입 AXIOS
    async function register() {
        if (dupCheckState) {
            if (registerPw == "" || registerPw == null) {
                await props.toastOn("비밀번호를 입력하세요.", "warn")
            } else {
                if (registerPw != registerPw2) {
                    await props.toastOn("비밀번호가 일치하지 않습니다.", "warn")
                } else {
                    try {
                        const data = await auth.register(registerNm, registerPw);
                        if (data.data) {
                            await props.toastOn("회원 가입이 완료되었습니다.", "success");
                            setLoginOrSignin(true);
                            setRegisterComplete(true);
                            setLoginNm(registerNm);

                        } else {
                            props.toastOn("동일 아이디가 있습니다. 새로고침 후 다시 시도해주세요", "error")
                        }
                    } catch (error) {
                        props.toastOn("네트워크 오류 - 관리자 문의", "error")
                    }
                }
            }
        } else {
            await props.toastOn("중복 체크를 완료해주세요.", "warn")
        }
    }

    //TODO: 로그인 axios
    async function login() {
        if (loginNm == '' || loginNm == null) {
            await props.toastOn("이름을 입력하세요.", "warn")
        } else {
            if (loginPw == '' || loginPw == null) {
                await props.toastOn("비밀번호를 입력하세요.", "warn")
            } else {
                try {
                    const data = await auth.login(loginNm, loginPw);
                    console.log(data.data.token)
                } catch (error) {
                    props.toastOn("네트워크 오류 - 관리자 문의", "error")
                }
            }
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.formStructor} style={{borderRadius: "15px"}}>
                <section className={styles.content}>
                    <div className={styles.leftContent}>
                        <div className={classNames({[styles.signup]: true, [styles.slideUp]: loginOrSignin})}>
                            <h2 className={styles.formTitle} onClick={() => setLoginOrSignin(false)}>
                                <span className={styles.span}>or</span>회원가입
                            </h2>
                            <div className={styles.formHolder}>
                                <div className={styles.inputBox}>
                                    <input type="text" className={styles.input}
                                           style={{width: "160px"}}
                                           placeholder="이름(한글만 입력)"
                                           onChange={(e) => setRegisterNm(e.target.value)}
                                           disabled={dupCheckState}/>
                                    <div className={styles.dupCheckBox}>
                                        {
                                            dupCheckState ?
                                                <div style={{textAlign: "center"}}>
                                                    <img src="./image/asset/check.png" alt="" width={35} height={35}/>
                                                </div>
                                                :
                                                <>
                                                    {
                                                        loadingState ?
                                                            <div style={{textAlign: "center"}}>
                                                                <img src="./image/asset/loading.gif" alt=""/>
                                                            </div>
                                                            :
                                                            <button type="button" className={styles.dupCheckBtn}
                                                                    onClick={() => dupCheck()}>
                                                                중복확인
                                                            </button>
                                                    }
                                                </>
                                        }
                                    </div>
                                </div>
                                <input type="password" className={styles.input}
                                       onChange={(e) => setRegisterPw(e.target.value)}
                                       placeholder="비밀번호"
                                       disabled={regComp}/>
                                <input type="password" className={styles.input}
                                       onChange={(e) => setRegisterPw2(e.target.value)}
                                       placeholder="비밀번호 확인"
                                       disabled={regComp}/>
                            </div>
                            <button className={classNames({[styles.submitBtn]: true, [styles.regComp]: regComp})}
                                    onClick={() => register()}
                                    disabled={regComp}
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className={classNames({[styles.login]: true, [styles.slideUp]: !loginOrSignin})}>
                            <div className={styles.center}>
                                <h2 className={styles.formTitle} onClick={() => setLoginOrSignin(true)}>
                                    <span className={styles.span}>or</span>로그인</h2>
                                <div className={styles.formHolder}>
                                    <input type="text" className={styles.input}
                                           placeholder="이름"
                                           value={loginNm}
                                           onChange={(e) => setLoginNm(e.target.value)}
                                    />
                                    <input type="password" className={styles.input}
                                           placeholder="비밀번호"
                                           onChange={(e) => setLoginPw(e.target.value)}
                                    />
                                </div>
                                <button className={styles.submitBtn}
                                        onClick={() => login()}
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightContent} style={{objectFit: "cover"}}>
                        <img src="./test.gif" alt="sideGIF" style={{width: "330px", height: "810px"}}/>
                    </div>
                </section>
            </div>
        </main>
    )
}