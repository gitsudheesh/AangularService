import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=74188710fac84a27419837a3287c1a11';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getProducts(name): Observable<any> {
    var endpoint1=name;

    //return this.http.get(endpoint + 'products').pipe(
    return this.http.get(endpoint1).pipe(
      map(this.extractData));
  }
  getWeather(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
