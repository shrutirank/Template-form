# Template-form
Edit-Delete-save in localstorage

Delete:
  list.ts->
  data!: Student[];
      
      del(i:number){
    this.data.splice(i,1);
    localStorage.setItem('formdata',JSON.stringify(this.data))
  }
  
  
  list.html->
     <tr *ngFor="let item of data,let i=index" >  
            <td>{{item.id}}</td> 
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>{{item.hobbie}}</td>
            <td>{{item.cars}}</td>
            <td>{{item.add}}</td>
            <td>{{item.date}}</td>
            <td>{{item.subject}}</td>
            <td>{{item.marks}}</td>
             <td><button type="button" mat-flat-button color="accent" (click)="del(i)">Delete</button></td>

 </tr>
  
  
