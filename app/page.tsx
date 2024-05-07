'use client'

import React, {useEffect, useState} from "react";
import {board, Board, TEST} from "@/apis";
import Main from "@/app/main/page";
import Sidenav from "@/app/component/sidenav";
import Insert from "@/app/insert/page";
import {toast, ToastContainer} from "react-toastify";
import Update from "@/app/update/page";

export default function Home() {

    const [currentPage, setCurrentPage] = useState<string>('a')
    const [updateUserId, setUpdateUserId] = useState<number>(0)

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
        }
    }

    return (
        <>
            <div>
                <ToastContainer/>
            </div>
            <Sidenav setCurrentPage={setCurrentPage}/>
            <main>
                <div className="form-structor">
                    <Main />
                </div>
            </main>
        </>
    );
}
