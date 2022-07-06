import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Student } from '../form/form.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Student[];

  constructor(private router:Router,private route:ActivatedRoute,private employeeService:EmployeeService,
    private dialog: MatDialog) {

    this.route.params.subscribe(data=>{
    console.log(data);
      })

   }
  

  ngOnInit(): void {
    this.getEmployee();
  }

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data1=>{
      this.data=data1 
    })
  }
  updateEmployee(id:number){
    if(id){
      this.router.navigate(['/form'],{queryParams:{id:id}});

    }
    else{
      this.router.navigate(['/form']);
    }
  }
  deleteEmployee(id:number){

    this.employeeService.deleteEmployee(id).subscribe(data1=>{
      console.log(data1);
      this.getEmployee();
    })
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details',id]);
  }

 viewsubject(subject: any) {
    this.dialog.open(DialogComponent, {
      data: subject,
    });
  } 

}



  // del(i: any){
  //   this.data.splice(i,1);
  //   localStorage.setItem('formdata',JSON.stringify(this.data));

  // }
  // edit(id:any){
  //   this.router.navigate(['/form',id]);  
  //   JSON.parse(localStorage.getItem('formdata')as any);
  // }

  