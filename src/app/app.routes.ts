import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'sign-In', component: SignInComponent},
    {path:'sign-Up', component: SignUpComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'employee', component: EmployeeComponent},
    {
        path: "", component: EmployeeComponent
    },    
];
