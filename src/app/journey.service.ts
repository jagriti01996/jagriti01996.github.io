import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { filter } from 'rxjs/operator';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }
}
