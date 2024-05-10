import axios from '@/utils/axios';
import {board} from "@/apis";
import {AuthInfo} from "@/apis/auth/type";

export const auth = {
    dupCheck: async (registerNm :string) => (
        await axios.post<boolean>('/auth/dupCheck', {registerNm})
    ),
    register: async (registerNm :string, registerPw :string) => (
        await axios.post<boolean>('/auth/register', {registerNm, registerPw})
    ),
    login: async (loginNm : string, loginPw :string) => (
        await axios.post<AuthInfo>('/auth/login', {loginNm, loginPw})
    )
}