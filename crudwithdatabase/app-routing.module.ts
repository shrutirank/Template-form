import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },

  {
    path:'form',
    component:FormComponent
  },
    {
     path:'form/:id', 
      component:FormComponent
    },
    // {
    //   path:'update-employee/:id',
    //   component:UpdateEmployeeComponent
    // },
    {
      path:'employee-details/:id',
      component:EmployeeDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
