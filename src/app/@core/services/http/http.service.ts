import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
interface IResponse {
  isError?: boolean;
  message?: string;
  data: any;
}
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private httpOptions = {};
  private domain = environment.baseUrl;
  token: any;

  tvvideo=false;
  constructor(private http: HttpClient) {}
  getCategories(): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`categories`));
  }
    getSliders(): Observable<IResponse> {

      return this.http.get<IResponse>(environment.baseUrl.concat(`sliders`));

  }
  getCategoryContent(slug: any,page:number): Observable<IResponse> {
    let params = new HttpParams().set("page", page);

    return this.http.get<IResponse>(
      environment.baseUrl.concat(`news-by-category/${slug}`),{params}
    );
  }
  getNewsContent(slug: any): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`news/${slug}`));
  }
  getTrandsSide(): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`last-trends-more-articles-read`));
  }
  getTrendsContent(slug: any): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`trends/${slug}`));
  }
  getArticles(page:number): Observable<IResponse> {
    let params = new HttpParams().set("page", page);

    return this.http.get<IResponse>(environment.baseUrl.concat(`articles`),{params});
  }
  getTopTaskbar(): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`taskbar-top`));
  }
  getRelatedNews(id: any): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`related-news/${id}`));
  }
  getCategoryTaskbar(id: any): Observable<IResponse> {
    return this.http.get<IResponse>(environment.baseUrl.concat(`taskbar-at-category/${id}`));
  }
  getTrends(page:number): Observable<IResponse> {
    let params = new HttpParams().set("page", page);
    return this.http.get<IResponse>(environment.baseUrl.concat(`trends`),{params});
  }
  relatedTrends(id: number) {
    return this.http.get<IResponse>(environment.baseUrl.concat(`related-trends/${id}`));
  }
  lastNews() {
    return this.http.get<IResponse>(environment.baseUrl.concat(`last-news-more-articles-read`));
  }

  articleDetails(slug:any) {
    return this.http.get<IResponse>(environment.baseUrl.concat(`articles/${slug}`));
  }
  relatedArticles(id:any) {
    return this.http.get<IResponse>(environment.baseUrl.concat(`/related-articles/${id}`));
  }
  getFaceLive(): Observable<IResponse> {

    return this.http.get<IResponse>(environment.baseUrl.concat(`/facebook-broadcast`));

}
getYoutubeLive(): Observable<IResponse> {

  return this.http.get<IResponse>(environment.baseUrl.concat(`/youtube-broadcast`));

}
getTv(): Observable<IResponse> {

  return this.http.get<IResponse>(environment.baseUrl.concat(`tv`));

}
  /////////////////////////////////////////////////////////////////////////////
  // getAllReports(): Observable<IResponse> {
  // this.token = localStorage.getItem('token');
  // if (this.token == null) {
  //   this.token = sessionStorage.getItem('token')?.slice(1, -1);
  // }
  // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  // if (sessionStorage.getItem('role')?.slice(1, -1) === 'Admin' || localStorage.getItem('role') === 'Admin')
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`Admin/GetAllReports`), { headers });
  // else
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`User/getUserReports`), { headers });
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   if (sessionStorage.getItem('role')?.slice(1, -1) === 'Admin' || localStorage.getItem('role') === 'Admin')
  //     return this.http.get<IResponse>(environment.baseUrl.concat(`Admin/getAllReports?pageNumber=${1}&recordsPerPage=${10}&searchQuery=${''}`), { headers });
  //   else
  //     return this.http.get<IResponse>(environment.baseUrl.concat(`User/getUserReports`), { headers });
  // }
  /////////////////////////////////////////////////////////////////
  // getSelectedReport(repCode: string): Observable<IResponse> {
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`${repCode}`),)
  // }
  /////////////////////////////////////////////////////////////////
  // getReportResult(repCode: string, pgNumber: number, objPerPage: number, body: []): Observable<IResponse> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json-patch+json',
  //   });
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`${repCode}` + `?pageNumber=${pgNumber}` + `&` + `objectsPerPage=${objPerPage}`), body, this.httpOptions)

  // }
  /////////////////////////////////////////////////////////////////
  // getdropDownValues(techName: string): Observable<IResponse> {
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`Helper/getDropDownData/${techName}`))

  // }
  ///////////////////////////////////////////////////////////////////////
  // getReportsToRequest(): Observable<IResponse> {
  //   // this.token = localStorage.getItem('token');
  //   // if (this.token == null) {
  //   //   this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   // }
  //   // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   // if (sessionStorage.getItem('role')?.slice(1, -1) === 'Admin' || localStorage.getItem('role') === 'Admin')
  //   //   return this.http.get<IResponse>(environment.baseUrl.concat(`Admin/GetAllReports`), { headers });
  //   // else
  //   //   return this.http.get<IResponse>(environment.baseUrl.concat(`User/getUserReports`), { headers });
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Helper/getAllReports`), { headers });

  // }
  // getReportsFilter(pId: number, num: number, filter: string): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`User/getUserReportRequests?pageNumber=${pId}&recordsPerPage=${num}&searchQuery=${filter}`), { headers })
  // }
  // getReportsToAskFilter(pId: number, num: number, filter: string, body: {}): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Helper/getAllReports?pageNumber=${pId}&recordsPerPage=${num}&searchQuery=${filter}`), body, { headers })
  // }
  // addToFavorite(id: number): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`User/addFavoriteReport/${id}`), {}, { headers })

  // }
  // removeFromFavorite(id: number): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`User/removeFavoriteReport/${id}`), {}, { headers })

  // }
  // removeReport(body: {}): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Admin/RemoveUserReport`), body, { headers });

  // }
  // getReportsToUser(pId: number, num: number, filter: string, body: {}): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Admin/GetAllReportsByUser?pageNumber=${pId}&recordsPerPage=${num}&searchQuery=${filter}`), body, { headers })
  // }

  // ***************************New Genration*************************************
  // getInputHistoryValues
  // getInputHistoryValues(technicalName: string, ReportName: Number): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Helper/getInputHistoryValues`), { technicalName, ReportName }, { headers })
  // }
  // // Get selection criteria
  // GetSelectionCriteria(ReportId: string): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`/${ReportId}`), { headers })
  // }
  // // Post selection history
  // PostSelectionHistory(historyFormatedData: any): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`Helper/getInputHistoryValues`), historyFormatedData, { headers })
  // }
  // // execute report
  // executeReport(body: any, pageNumber: number, objectsPerPage: number, reportName: any): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.post<IResponse>(environment.baseUrl.concat(`${reportName}?pageNumber=${pageNumber}&objectsPerPage=${objectsPerPage}`), body, { headers })
  // }
  // // To get help button
  // GetHelpButton(techName: any): Observable<IResponse> {
  //   this.token = localStorage.getItem('token');
  //   if (this.token == null) {
  //     this.token = sessionStorage.getItem('token')?.slice(1, -1);
  //   }
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token).set('Accept', 'application/json');
  //   return this.http.get<IResponse>(environment.baseUrl.concat(`Helper/getSelectionInputHelperData/${techName}`), { headers })
  // }
}
