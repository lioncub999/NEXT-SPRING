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