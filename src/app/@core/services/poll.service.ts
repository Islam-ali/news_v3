import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) {}
  pollQuestion(): Observable<any> {
    
    return this.http.get<any>(environment.baseUrl.concat(`polls`));
  }
  pollResult(pollID:any): Observable<any> {
    
    return this.http.get<any>(environment.baseUrl.concat(`poll-result/${pollID}`));
  }
  pollSubmit(answer:any): Observable<any> {
    
    return this.http.post<any>(environment.baseUrl.concat(`poll-submit`),answer);
  }
  checkUserAnswer(id: any) {
    if (localStorage.getItem('pollAnswer')==id) {
      return true
    }
    return false
  }
}
