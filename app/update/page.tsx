'use client'

import {Board} from "@/apis";
import {useEffect} from "react";

export default function Update(props :any) {

    async function fetchData(id :number) {
        const data = await Board.getBoardById(id);
    }

    useEffect(() => {
        fetchData(props.updateUserId)
    }, []);
    return (
        <div style={{textAlign:"center"}}>
            수정페이지
        </div>
    )
}