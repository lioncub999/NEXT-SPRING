import axios from '@/utils/axios';

export const TEST = {
    getTest: async()  => await axios.get<number>('/test/hello', {})
}