import axios from '@/utils/axios';
import {APIResponse, board, boardPageInfo} from '@/apis';

export const Board ={
    getBoardList: async() =>
        await axios.get<APIResponse<boardPageInfo>>('/board/getBoardList', {}),
    getBoardById : async(id : number | undefined) => await axios.post<board>('/board/getBoardById', {id}),
    insertBoard: async (title: string | undefined) => await axios.post('/board/insert', {title}),
    deleteBoard: async (id: number | undefined) => await axios.post('/board/delete', {id}),
    updateBoard: async (id: number, title : string) => await axios.post('/board/update', {id, title}),
    likeBoard: async (id: number) => await axios.post('/board/like', {id}),
}