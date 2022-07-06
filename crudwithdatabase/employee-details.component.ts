import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Student } from '../form/form.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;
  data: Student;
  constructor( private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.data=new Student();
    this.employeeService.getEmployeeBYId (this.id).subscribe(data1=>{
      this.data=data1;
    })
  }

}
