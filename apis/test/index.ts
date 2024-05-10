import axios from '@/utils/axios';
import {token} from "@/apis/test/type";

export const TEST = {
    getTest: async()  => await axios.post<number>('/auth/logout', {}),
    testLogin: async() => await axios.post<token>('/auth/logout', {})
}