import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees:any,args:any):any {

   if(args=='all')
       return employees;
  else
  {
    var Employees:any=[]
    employees.forEach((employee:any)=> ((employee.empName+(String)(employee.empId)+(String)(employee.empSal)).toLowerCase().includes(args)) ? Employees.push(employee) : console.log(-1))
        return Employees;
  }

  }

}
