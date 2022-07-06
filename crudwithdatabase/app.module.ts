import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';

import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { AgePipe } from './pipe/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
 
    EmployeeDetailsComponent,
    DialogComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
