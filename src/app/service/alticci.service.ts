import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Constants } from '../config/constants';
import { Alticci } from '../model/alticci.model';

@Injectable({
  providedIn: 'root',
})
export class AlticciService {
  constructor(private http: HttpClient) {}

  getIndexAlticciValue(n: number): Observable<Alticci> {
    return this.http
      .get<Alticci>(Constants.API_ENDPOINT + n)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
