import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ApiUrl = '';

  constructor(private httpClient: HttpClient) {}

  get(url: string, body?: {}, includeHeader?: boolean): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.httpClient.get(`${this.ApiUrl}${url}`, {
      headers: headers,
      withCredentials: false,
    });
  }

  post(url: string, body?: {}): Observable<any> {
    const url_ = url.replace(/[?&]$/, '');
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        Accept: '*/*',
      }),
    };
    return this.httpClient.post(`${this.ApiUrl}${url}`, content_, options_);
  }

  postJson(url: string, body?: {}): Observable<any> {
    const url_ = url.replace(/[?&]$/, '');
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // Accept: '*/*',
        'Access-Control-Allow-Headers': 'Content-Type',
      }),
    };
    return this.httpClient.post(`${this.ApiUrl}${url}`, content_, options_);
  }

  putJson(url: string, body?: {}): Observable<any> {
    const content_ = JSON.stringify(body);

    let options_: any = {
      body: content_,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
      }),
    };
    return this.httpClient.post(`${this.ApiUrl}${url}`, content_, options_);
  }

  postFile(url: string, body: {}): Observable<any> {
    return this.httpClient.post(`${this.ApiUrl}${url}`, body, {
      headers: new HttpHeaders({}),
      withCredentials: false,
    });
  }

  put(url: string, body: {}): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    return this.httpClient.post(`${this.ApiUrl}${url}`, body, {
      headers: headers,
      withCredentials: false,
    });
  }

  async awaitPut(url: string, body: {}) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    var response = await this.httpClient
      .put<any>(`${this.ApiUrl}${url}`, body, {
        headers: headers,
        withCredentials: false,
      })
      .pipe(delay(1000))
      .toPromise();
  }

  delete(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${this.ApiUrl}${url}`, {
      headers: headers,
    });
  }
}
