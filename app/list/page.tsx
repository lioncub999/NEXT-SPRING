'use client'

import {Button, Pagination, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {APIResponse, Board, board, boardPageInfo} from "@/apis";

export default function List(props: any) {
    const [boardList, setBoardList] = useState<board[]>();
    const [totalBoardCount, setTotalBoardCount] = useState<number>(0);
    const [loadingBar, setLoadingBar] = useState<boolean>(true);

    async function deleteBoard(id: number | undefined) {
        await Board.deleteBoard(id);
        await props.toastOn('레전드 삭제 완료.', 'success')
        fetchData()
    }

    async function likeBoard(id: number) {
        await Board.likeBoard(id);
        await props.toastOn('따봉~👍👍👍', 'default')
        await fetchData();
    }

    async function fetchData() {
        const data = await Board.getBoardList();
        console.log(data.data)
        setBoardList(data.data.boardList);
        setTotalBoardCount(data.data.totalBoardCount);
        setLoadingBar(false);
        return data
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {
                loadingBar ?
                    <div className="box">
                        <div className="loading-bar"></div>
                    </div>
                    :
                    null
            }

            <Table striped bordered hover>
                <colgroup>
                    <col width={"30%"}></col>
                    <col width={"5%"}></col>
                    <col width={"5%"}></col>
                    <col width={"10%"}></col>
                    <col width={"20%"}></col>
                    <col width={"15%"}></col>
                    <col width={"15%"}></col>
                </colgroup>
                <thead>
                <tr style={{textAlign: "center", verticalAlign: "middle"}}>
                    <th>TITLE</th>
                    <th>따봉수</th>
                    <th>개추</th>
                    <th>쓴사람</th>
                    <th>언제씀</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {boardList ?
                    boardList.length > 0 ?


                        boardList.map((a, i) => {
                            return (
                                <tr key={i} style={{textAlign: "center", verticalAlign: "middle"}}>
                                    <td>{a.title}</td>
                                    <td>{a.thumb}</td>
                                    <td><span style={{cursor: "pointer"}} onClick={function () {
                                        likeBoard(a.id);
                                    }}>👍🏿</span></td>
                                    <td>{a.creId}</td>
                                    <td style={{textAlign: "left"}}>{a.creDtm}</td>
                                    <td><Button variant="outline-primary" onClick={function () {
                                        props.setUpdateUserId(a.id)
                                        props.setCurrentPage('update')
                                    }}
                                    >레전드수정</Button></td>
                                    <td><Button variant="outline-danger" onClick={function () {
                                        deleteBoard(a.id)
                                    }}>레전드삭제</Button></td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td colSpan={6} style={{textAlign: "center"}}>데이터가 없습니다.</td>
                        </tr>
                    :
                    <tr>
                    </tr>
                }
                </tbody>
            </Table>

            <Pagination style={{justifyContent: "center"}}>
                {/*<Pagination.First/>*/}
                {/*<Pagination.Prev/>*/}
                {/*<Pagination.Ellipsis/>*/}
                {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}

                {
                    totalBoardCount > 0 ?
                        <Pagination.Item active>{1}</Pagination.Item>
                        :
                        null
                }


                {/*<Pagination.Next/>*/}
                {/*<Pagination.Last/>*/}
            </Pagination>
        </div>
    )
}