import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rows, theatre } from 'src/Models/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  RowArr!: Rows[];
  Data! : theatre;
  bookedSeats: number[] = [];
  constructor(private http : HttpClient) {
    if(this.jsonData){
      this.jsonData.subscribe((val:theatre) => {
        this.Data = val;  
        // console.log(this.Data);
      });
      
    }
  }

  get jsonData():Observable<theatre>{
    return this.http.get<theatre>('assets/movies.json');
  }

  get alreadyBookedSeats(){
    return this.bookedSeats;
  }

  addBookedSeat(seatNo : number){
    this.bookedSeats.push(seatNo);
  }

  removeBookedSeat(seatNo : number){
    this.bookedSeats = this.bookedSeats.filter(seat => seat != seatNo);
  }

}
