'use client'

import {Board, TEST} from "@/apis";
import {useEffect} from "react";

export default function List(props: any) {
    function authApiTest() {
        localStorage.clear();
        props.setCurrentPage('login');
        props.toastOn("로그아웃 되었습니다.", "success")
    }
    return (
        <main>
            <div className="form-structor">
                <section className="content">
                    <div className="left-content">
                        <button onClick={() => authApiTest()}>
                            AUTH API TEST
                        </button>
                    </div>
                    <div className="right-content">
                        right
                    </div>
                </section>
            </div>
        </main>
    )
}