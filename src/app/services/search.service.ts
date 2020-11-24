import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchCompany(nameOrNumber: string) {
    return this.http.get(`${environment.companySearchURL}${nameOrNumber.trim()}`);
  }

  searchOfficers(number: string) {
    return this.http.get(`${environment.officerSearchURL}${number}`);
  }
}
