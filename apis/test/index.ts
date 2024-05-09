import axios from '@/utils/axios';
import {token} from "@/apis/test/type";

export const TEST = {
    getTest: async()  => await axios.get<number>('/home', {}),
    testLogin: async() => await axios.post<token>('/auth', {username:"kim", password:"3333"})
}