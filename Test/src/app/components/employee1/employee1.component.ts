import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

find:any="all"
employees:any=[]
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmloyees().subscribe(
      data => this.employees=data
    )
  }

}
