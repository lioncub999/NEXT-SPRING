'use client'

import 'react-toastify/dist/ReactToastify.css';
import React, {useState} from "react";
import {Board} from "@/apis";

export default function Insert(props:any) {
    const [title, setTitle] = useState<string>()
    async function insertBoard(title: string | undefined) {
        await Board.insertBoard(title);
        await props.toastOn('레전드 글이네요.', 'success');
        await props.setCurrentPage('list');
    }


    return (
        <div style={{textAlign:"center"}}>
            <h2>한줄</h2>
            <input type="text" onChange={function (e) {
                setTitle(e.target.value);
            }}/>
            <button onClick={() => insertBoard(title)}>슛~</button>
        </div>
    )
}