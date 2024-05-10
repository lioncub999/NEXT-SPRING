export interface APIResponse<T> {
    respTime: string;
    ok: boolean;
    errorState: null | any;
    result: T;
}

export * from './test';
export * from './board';
export * from './board/type';
export * from './auth';
