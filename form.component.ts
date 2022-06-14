import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,FormArray,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Student } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // id: any[]=[];
  // form:any;
  // data={
  //   fid:"",
  //   name:"",
  //   add:"",
  //   gender:"",
  //   hobbie:"",
  //   cars:""
  // }

  data=new Student();
  editid !:number;
  myform: FormGroup;
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
  
  
  // websiteList:Array< any> = [
  //   { value:'Google.com', name: 'Google.com' },
  //   {value:'Angular.com',  name: 'Angular.com' },
  //   {  value:'Tutsmake.com', name:'Tutsmake.com' },
  //   {value:'yahoo.com',name:'yahoo.com'}
  //];

//Edit
   constructor(private router:Router,private activatedroute : ActivatedRoute,private formBuilder: FormBuilder) {
    this.activatedroute.params.subscribe((data : any )=> {
      
     
      if(data && data.id)
      {
        this.editid=Number(data.id)
      
      }

    });
    this.myform = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    })
    // if(this.data && this.data.fid){
    //   this.editid = Number(this.data.fid)
    // }
  
  }

// 
  ngOnInit(): void {
   
    if(this.editid){
    let jsonarray=JSON.parse(localStorage.getItem('formdata')as any);
    if(jsonarray){
   let object=jsonarray.find((x:{ id:number})=>x.id==this.editid)
        if(object){
         this.data=object
       }
     }
    }
 }

//save data
  sdata(){
    //checkbox
    const selected=this.checkboxJson.filter(p=>p.checked).map(x=>x.label);
    console.log(selected)
    //edit
    if(this.editid){
      let editobject=JSON.parse(localStorage.getItem('formdata')as any);

      //checkbox
      const selected=this.checkboxJson.filter(p=>p.checked).map(x=>x.label);
      this.data.hobbie=selected.join(',')

      let i=editobject.findIndex((x: {id:any;})=>x.id === this.editid);
      editobject[i]=this.data;
      localStorage.setItem("formdata",JSON.stringify(editobject))
      
    }  
    else{
      let jsonarray=JSON.parse(localStorage.getItem('formdata')as any);
      if(!jsonarray){
        jsonarray=[];
      }
      //random id:   this.data.id=Math.floor(Math.random()*100)
      this.data.hobbie=selected.join(',')//checkbox value save in localstorage
      jsonarray.push(this.data);
      let x = localStorage.setItem('formdata',JSON.stringify(jsonarray));
     
      console.log(x)
    }
    console.log(this.myform.value);
  }
     showdata(){
       this.router.navigate(['/list']);
     }

  
  }

  //onCheckbox(e : any) {
    //     const website: FormArray = this.myform.get('formdata') as FormArray;
       
    //     if (e.target.checked) {
    //       website.push(new FormControl(e.target.value));
    //     } else {
    //       let i:number=0;
    //       website.controls.forEach((item:any,FormControl)=>{
    //         if(item.value == e.target.value){
    //           website.removeAt(i);
    //           return;
    //         }
    //       i++;
    //     });
    //   }
    // }


  //checkbox 
  /*formvalue:FormGroup
  public select:any=[];
  hobbie=[
    {id:1,label:"reading"},
    {id:2,label:"writing"},
    {id:3,label:"dancing"},
  ]
  onCheckboxChange(e){
    const hobbie:FormArray = this.formvalue.get('hobbie') as FormArray;
    if(e.target.checked){
      hobbie.push(new FormControl(e.target.value))
    }
    else {
      let i : number = 0;
      hobbie.controls.forEach((item: FormControl)=> {
        if(item.value == e.target.value){
          hobbie.removeAt(i);
          return;
        }
        i++;
      });
    }

  }*/






