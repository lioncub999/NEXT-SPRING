import axios from '@/utils/axios';
import {APIResponse, board } from '@/apis';

export const Board ={
    getBoardList: async() => await axios.get<Array<board>>('/board/getBoardList', {}),
    getBoardById : async(id : number | undefined) => await axios.post<board>('/board/getBoardById', {}),
    insertBoard: async (title: string | undefined) => await axios.post('/board/insert', {title}),
    deleteBoard: async (id: number | undefined) => await axios.post('/board/delete', {id})
}