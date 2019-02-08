import { Component, OnInit } from '@angular/core';
import { IEmployee }from './IEmployee'
import { EmployeeService } from './employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];

  constructor(private _employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
  
    this._employeeService.getEmployees().subscribe(
      (listEmployees) => this.employees = listEmployees,
      (err) => console.log(err)
    )
  }

  editButtonClick(employeeId: number) {
      this._router.navigate(['/employees/edit', employeeId]);
  }

}
