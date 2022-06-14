import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  data: any;

  constructor(private router:Router,private route:ActivatedRoute) {

    this.route.params.subscribe(data=>{
    console.log(data);
      })

   }
  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem('formdata')as any);
    console.log(this.data);

  }

  del(i: any){
    this.data.splice(i,1);
    localStorage.setItem('formdata',JSON.stringify(this.data));

  }
  edit(id:any){
    this.router.navigate(['/form',id]);  
    JSON.parse(localStorage.getItem('formdata')as any);
  }
}
  // onAdd(){
  //   this.router.navigate(['/form']);
  // }



 

  /*constructor(private activatedroute : ActivatedRoute,private router:Router) { 

      //   console.log( id);
        //  if(this.fdata && this.fdata.id)
        //  {
        //    this.editid=Number(this.fdata.id)
        //  }
   
       })
  }

  
 
  ind: any;
   del(index){
   this.ind=this.id1.indexOf(index)
   if(this.ind >=0){
     this.id1.splice(this.ind,1);
   }
   localStorage.setItem("formdata",JSON.stringify(this.id1));
   console.log(this.id1)
  
  }

    // this.router.navigate(['/form',id]);
   //JSON.parse(localStorage.getItem('formdata')as any)
  //  router: any;

 editid:any

    edit(id:any){
      this.router.navigate(['/form'], {queryParams: {id: id}});
     
        if(this.editid){
          let jsonarray=JSON.parse(localStorage.getItem('formdata')as any);
          if(jsonarray){
            let object=jsonarray.find((x:{id:number,})=>x.id==this.editid)
              if(object){
                this.id1=object
              }
              
          }
        }
     }

  ngOnInit(): void {
    this.data = localStorage.getItem('formdata')
   // console.log(this.fdata)                                     
    this.id1 = JSON.parse(this.data)
    

  }
  // randomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
*/

