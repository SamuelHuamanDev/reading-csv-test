import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReadCsvService {

  constructor(private http: HttpClient) {
  }

  getInfo(csvUrl: string): Observable<string> {
    return this.http.get(csvUrl, {responseType: "text"})
  }
}
