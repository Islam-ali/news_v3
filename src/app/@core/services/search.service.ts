import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private httpOptions = {};
  private domain = environment.baseUrl;
  token: any;
  constructor(private http: HttpClient) {}
  search(body: any,page:any): Observable<any> {
    let params = new HttpParams().set("page", page);
    
    return this.http.post<any>(environment.baseUrl.concat(`search`),body,{params});
  }
}
