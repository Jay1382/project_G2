import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONFIG } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  AddEmployee(data: any) {
    return this.http.post(`${CONFIG.apiBaseUrl}api/AddEmployee`, data);
  }

  getemployee() {
    return this.http.get(`${CONFIG.apiBaseUrl}api/GetEmployee`);
  }
}
