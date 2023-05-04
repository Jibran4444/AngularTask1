export interface theatre {
    BasicPrice: number;
    MovieName: string;
    Rows: Rows[];
}

export interface Rows {
    row: number;
    Start: number;
    End: number;
    AlreadyBooked: number[];
}

export interface bookedSeat{
    seatNo : number;
    rowNo : number;
}