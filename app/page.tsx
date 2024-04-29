'use client'

import React, {useEffect, useState} from "react";
import {board, Board, TEST} from "@/apis";
import List from "@/app/list/page";
import Topnav from "@/app/component/topnav";
import Insert from "@/app/insert/page";
import {toast, ToastContainer} from "react-toastify";
import Update from "@/app/update/page";

export default function Home() {

    const [currentPage, setCurrentPage] = useState<string>('list')
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
        <div>
            <div>
                <ToastContainer/>
            </div>
            <Topnav setCurrentPage={setCurrentPage}/>
            <div className="cont-box">
                {currentPage == 'list' ?
                    <List
                        toastOn={toastOn}
                        setCurrentPage={setCurrentPage}
                        setUpdateUserId={setUpdateUserId}
                    /> :

                    currentPage == 'insert' ?
                        <Insert toastOn={toastOn}
                                setCurrentPage={setCurrentPage}
                        /> :

                        currentPage == 'update' ?
                            <Update updateUserId={updateUserId}
                                    toastOn={toastOn}
                                    setCurrentPage={setCurrentPage}
                            />
                            : null
                }
            </div>

        </div>
    );
}
