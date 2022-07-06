import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  myprop!:any;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any,private employeeService:EmployeeService) { }

  ngOnInit(): void {


  }
  
  deleteSub(id:number){
   // this.data.filter(item => item.id != id);
  this.employeeService.deleteSubject(id).subscribe(data1=>{
    console.log(data1);
    })
    const item = this.data.find(item => item.id === id);
    this.data.splice(this.data.indexOf(item));
   }
  
}
