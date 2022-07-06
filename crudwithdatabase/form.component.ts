import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { EmployeeService } from '../employee.service';
import { Student,Subject } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  data=new Student();
  id:any;

  checkboxJson=[{
    id:1,
    label:'Reading',
    checked:false
},
{
  id:2,
  label:'dancing',
  checked:false
},
{
  id:3,
  label:'playing',
  checked:false
},
{
  id:4,
  label:'Singing',
  checked:false
},

]

   constructor(private router:Router,private route : ActivatedRoute, private employeeService:EmployeeService) {
    
  }

 
  ngOnInit(): void {
   
    this.id = this.route.snapshot.queryParams['id'];
    if (this.id) {
      this.employeeService. getEmployeeBYId(this.id).subscribe((response:any) => {
        console.log(response);
        const hobbyAry = response.hobbie.split(',');
        for (let i = 0; i < hobbyAry.length; i++) {
          const index = this.checkboxJson.findIndex(p => p.label == hobbyAry[i]);
          if (index != -1 ) {
            this.checkboxJson[index].checked = true;
          }
        }
        this.data = response;
      });
    }
 }


 saveEmployee(){
  const selected=this.checkboxJson.filter(p=>p.checked).map(x=>x.label);
  this.data.hobbie=selected.join(',')

  this.employeeService.createEmployee(this.data).subscribe(data1=>{
    console.log(data1)
    this.showdata();
  },error=>console.log(error));
  
 }
 showdata(){
  this.router.navigate(['/list']);
}


 onSubmit(){
    console.log(this.data);
    this.saveEmployee();

 }



 addsubject(){
  this.data.subject.push(new Subject())
 }
 deletesubject(i:number){
  this.data.subject.splice(i,1)
 }

}


  
    
  
   

  
  







