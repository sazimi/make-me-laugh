import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { iJoke } from './joke';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class JokeService {

    private heroesUrl = 'https://safe-falls-22549.herokuapp.com';  // URL to web api

    constructor(
        private http: HttpClient) { }


    /** GET hero by id. Will 404 if id not found */
    getRandomJoke(): Observable<iJoke> {
        const url = `${this.heroesUrl}/random_joke`;
        return this.http.get<iJoke>(url).pipe(
            tap(_ => console.log(`fetched Joke`)),
            catchError(this.handleError<iJoke>(`random_ten`))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
