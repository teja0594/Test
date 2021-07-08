import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {

  find:any="all"
  employees:any=[]
    constructor(private empService:EmployeeService) { }

    ngOnInit(): void {
      this.empService.getEmloyees().subscribe(
        data => this.employees=data
      )
    }

}
