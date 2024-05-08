'use client'

import {Board, TEST} from "@/apis";
import {useEffect} from "react";

export default function List(props: any) {
    async function test() {
        await Board.getBoardList();
    }

    useEffect(() => {
        test();
    }, []);

    return (
        <main>
            <div className="form-structor">
                <section className="content">
                    <div className="left-content">
                        left
                    </div>
                    <div className="right-content">
                        right
                    </div>
                </section>
            </div>
        </main>
    )
}