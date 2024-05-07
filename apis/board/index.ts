import axios from '@/utils/axios';
import {APIResponse, board, boardPageInfo, ttt} from '@/apis';

export const Board ={
    getBoardList: async() =>
        await axios.get<boardPageInfo>('/board/getBoardList', {}),
    getBoardById : async(id : number | undefined) => await axios.post<board>('/board/getBoardById', {id}),
    insertBoard: async (title: string | undefined) => await axios.post('/board/insert', {title}),
    deleteBoard: async (id: number | undefined) => await axios.post('/board/delete', {id}),
    updateBoard: async (id: number, title : string) => await axios.post('/board/update', {id, title}),
    likeBoard: async (id: number) => await axios.post('/board/like', {id}),
    apiTest: async () => await axios.get<ttt>('http://openapi.seoul.go.kr:8088/51755175466c696f333867724c5946/json/GlobalJobCounselRst/1/1000',{})
}