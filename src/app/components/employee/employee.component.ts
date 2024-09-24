import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmployeeResponse } from '../../model/employee';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employeeResponse :any;
  employeeForm: FormGroup = new FormGroup({});
  @ViewChild('myModal') model: ElementRef | undefined;
  
  constructor(private _employeeService: EmployeeService, private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.setFormState();
    this.getEmployees();
  }

  setFormState() {
    this.employeeForm = this.fb.group({
      employeeID: [0],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  getEmployees() : void {
    this._employeeService.getemployee().subscribe((response : any) => {
      if(response.data.statusCode = 200){
        console.log(response);
        this.employeeResponse = response.data;
        console.log(this.employeeResponse);
      }
    }, error => {

    });
  }

  OnEdit(data: EmployeeResponse) {
    this.openModal();
    this.employeeForm.patchValue(data);
    console.log(data)
  }

  onDelete(employee: EmployeeResponse) {
    alert("Delete employee");
  }

  closeModal() {
    this.setFormState();
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  openModal() {
    const empModal = document.getElementById('myModal');
    if (empModal != null) {
      empModal.style.display = 'block';
    }
  }

  onSubmit() {
    console.log(this.employeeForm.value);
    this._employeeService.AddEmployee(this.employeeForm.value).subscribe((response : any) => {
      if(response.data.statusCode = 200){
        console.log(response);
        this.employeeResponse = response.data;
        console.log(this.employeeResponse);
      }
    }, error => {

    });
  }
}
