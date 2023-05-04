import { Component } from '@angular/core';
import { CinemaService } from '../Services/cinema.service';
import { Rows, bookedSeat, theatre } from 'src/Models/cinema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent {
  jsonData!: theatre;
  rowArr! : Rows[];
  MovieName! : string;
  total:number = 0;
  constructor(private cinema: CinemaService) {
    if (this.cinema.jsonData) {
      this.cinema.jsonData.subscribe((val: theatre) => {
        this.jsonData = val;
        this.rowArr = this.jsonData.Rows;
        this.MovieName = this.jsonData.MovieName;
      });
    }
  }

  counter(start: number | null, end: number | null) {
    let arr = [];
    if (start != null && end != null) {
      let diff = end - start;
      if (diff < 5) {
        for (let i = start; i <= end; i++) {
          arr.push(i)
        }
        for (let i = start; i <= end; i++) {
          arr.push(-1)
        }
      }
      else {
        for (let i = start; i <= end; i++) {
          arr.push(i)
        }
      }
    }
    return arr;
  }

  get alreadyBookedSeats(){
    return this.cinema.alreadyBookedSeats;
  }

  bookSeat(seatNo: number, rowNo : number) {
    if(rowNo <= 3){
      this.total += 300;
    }
    else{
      this.total += 300 + (50 * (rowNo - 3));
    }
    this.cinema.addBookedSeat(seatNo);
  }
  unBookSeat(seatNo: number, rowNo : number) {
    this.cinema.removeBookedSeat(seatNo);
    if(rowNo <= 3){
      this.total -= 300;
    }
    else{
      this.total -= 300 + (50 * (rowNo - 3));
    }
  }
}
