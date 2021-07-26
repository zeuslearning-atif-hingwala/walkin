
import { Time } from "@angular/common";

export interface dropDown{
    name: string;
    type: dropDownType;
    data: jobRoleData | instructionData | educationQualificationData | professionalQualificationData;
}

export enum dropDownType{
    job_role=0,
    instructions=1,
    educationQualification=2,
    professionalQualificationData=3
}

export interface jobRoleData{
    compensation: string;
    
}

export interface instructionData{
    compensation?: string;
}

export interface educationQualificationData{
    percentage: number;
    yearOfPassing: number;
    qualification: string;
    stream: string;
    college: string;
    collegeLocation: string,
    compensation?: "1,00,000"

}

export interface professionalQualificationData{
    compensation?: "2,00,000";
    applicant_type: string;
    years_of_exp: number;
    current_CTC: string;
    expected_CTC: string;

}

export interface data{
    name: string;
    // date: Date;
    // city: string;
    // roles: string[];
    // slotTime: Time[];
}

