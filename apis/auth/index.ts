import axios from '@/utils/axios';
import {board} from "@/apis";

export const auth = {
    register: async () => (
        await axios.post('/auth/register', {})
    ),
    dupCheck: async (registerNm :string) => (
        await axios.post<boolean>('/auth/dupCheck', {registerNm})
    ),
}