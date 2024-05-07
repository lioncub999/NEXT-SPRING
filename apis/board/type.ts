export interface boardPageInfo {
    totalBoardCount : number;
    boardList : board[];
}

export interface board {
    id: number;
    title: string;
    thumb : number;
    creId: string;
    creDtm: string;
}

export interface ttt {
    GlobalJobCounselRst : {
        list_total_count : number;
        row : aaa[];
    };
}

export interface aaa {
    CATEGORY_NM : string;
    TYPE1 : number;
}