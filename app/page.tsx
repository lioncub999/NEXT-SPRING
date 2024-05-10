'use client'

import React, {useEffect, useState} from "react";
import Main from "@/app/main/page";
import Sidenav from "@/app/component/sidenav";
import Auth from "@/app/auth/page";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [currentPage, setCurrentPage] = useState<string>('')
    const [token, setToken] = useState<string>('')

    async function toastOn(toastMsg: string, type: string) {
        if (type == 'success') {
            toast.success(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type == 'info') {
            toast.info(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type == 'default') {
            toast(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type == 'default') {
            toast(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type == 'warn') {
            toast.warn(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (type == 'error') {
            toast.error(toastMsg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(
        () => {
            const token: string | null = localStorage.getItem("token");
            if (token == '' || token == null) {
                setCurrentPage("login")
            } else {
                setCurrentPage("main")
            }
        }, []
    )

    return (
        <>
            <ToastContainer/>
            {
                currentPage == 'login' || currentPage == '' ?
                    null :
                    <Sidenav setCurrentPage={setCurrentPage}/>
            }
            {
                currentPage == '' ?
                    null
                    :
                    currentPage == 'login' ?
                        <Auth toastOn={toastOn} setCurrentPage={setCurrentPage}/>
                        :
                        currentPage == 'main' ?
                            <Main setCurrentPage={setCurrentPage} toastOn={toastOn}/> :
                            null
            }
        </>
    );
}
