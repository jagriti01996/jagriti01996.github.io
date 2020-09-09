import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {
@Input() employeeData:{
  category: string,
  subCategory: string,
  employeeImage: string,
  employeeName: string,
  workLocation: string,
  projectName: string,
  projectStage: string,
  role: string,
  teamSize: string,
  availability: string,
  mobile: string
}
  constructor() { }

  ngOnInit(): void {
  }

}
