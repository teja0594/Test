import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="assets/json/employees.json"
  constructor(private http:HttpClient) { }

  getEmloyees():Observable<any>{
    return this.http.get(this.baseUrl);

  }
}
