import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import IAlert from "../Types/IAlert";

@Injectable({
  providedIn: "root"
}) export class AlertsService {
  private apiUrl = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiUrl = baseUrl + 'api/alerts';
  }

  getAlerts() : Observable<IAlert[]> {
    return this.http.get<IAlert[]>(this.apiUrl);
  }

  getAlertsCsv(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/getcsv');
  }

}
