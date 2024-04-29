'use client'

import {board, Board} from "@/apis";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

export default function Update(props: any) {
    const [board, setBoard] = useState<board>()
    const [updateTitle, setUpdateTitle] = useState<string>('')

    async function fetchData(id: number) {
        const data = await Board.getBoardById(id);
        setBoard(data.data);
        setUpdateTitle(data.data.title);
    }

    async function updateBoard(id: number, title : string) {
        await Board.updateBoard(id, title);
        await props.toastOn('수정 완료.', 'success');
        await props.setCurrentPage('list');
    }

    useEffect(() => {
        fetchData(props.updateUserId)
    }, []);
    return (
        <>
            {
                board ?
                    <div style={{textAlign: "center"}}>
                        <p>TITLE : <input type="text" style={{width: "400px"}} defaultValue={board.title} onChange={function(e) {
                            setUpdateTitle(e.target.value);
                        }}/></p>
                        <p><Button onClick={function() {
                            updateBoard(board.id, updateTitle)
                        }}>저장 ㅋ</Button></p>
                    </div> : null
            }
        </>
    )
}