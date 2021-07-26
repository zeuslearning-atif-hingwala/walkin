import { instructionData } from './../app.model';
// import { dropDown } from './../app.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { dropDown, dropDownType, jobRoleData } from '../app.model';
// import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('personal') personal_form: NgForm;
  constructor() { }

  ngOnInit(): void {
  }


  formSubmit(form: NgForm){
    console.log(form);
  }


  dropDownData: dropDown[]=[
    // {
    //   name: "Instructional designer",
    //   type: dropDownType.job_role,
    //   data: {
    //     compensation: "3,00,000"
    //   } as jobRoleData
    // } as dropDown,
    // {
    //   name: "Software Engineer",
    //   type: dropDownType.job_role,
    //   data: {
    //     compensation: "5,75,000"
    //   } as jobRoleData
    // } as dropDown,
    // {
    //   name: "Software Quality Engineer",
    //   type: dropDownType.job_role,
    //   data: {
    //     compensation: "4,50,000"
    //   } as jobRoleData
    // } as dropDown,
    // {
    //   name: "Pre-requisite and Processes",
    //   type: dropDownType.instructions,
    //   data: {
        
    //   } as instructionData
    // } as dropDown
    {
      name: "Educational Qualification",
      type: dropDownType.educationQualification,
      data: {
        percentage: 65,
        yearOfPassing: 2020,
        qualification: "BTech",
        stream: "IT",
        college: "RGIT",
        collegeLocation: "Pune"
      }
    },
    {
      name: "Professional Qualification",
      type: dropDownType.professionalQualificationData,
      data:{
        applicant_type: "Fresher",
        years_of_exp: 2,
        current_CTC: "5,00,000",
        expected_CTC: "2,50,000",
      } 
    }
  ]

  data=[
    {
      id: 1,
      name: "Personal information"
    },
    {
      id: 2,
      name: "Qualification"
    },
    {
      id: 3,
      name: "Review and Proceed"
    }
  ];

  active: number;
  onClick(id:any){
    const element=document.getElementById(id);
    this.active=id;
    console.log(element);
    element.classList.toggle("toggle");
  }
}
