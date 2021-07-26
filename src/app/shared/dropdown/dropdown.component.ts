import { dropDown } from './../../app.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() dropDownData: dropDown[];

  onClick(name){
    const elements= document.getElementById("p"+ name);
    console.log(elements);
    elements.classList.toggle("toggle");
  }

  toggled_once=0;
  Box(applicant_type: string){
      
      const fresh= document.getElementById("fresher");
      const exp= document.getElementById("experience");
      if (applicant_type=="fresher"){
        if(this.toggled_once==0){
          fresh.classList.toggle("toggle");
          this.toggled_once=1;
        }
        else if(this.toggled_once==1){
          exp.classList.toggle("toggle");
          fresh.classList.toggle("toggle");
        }
      }
      if (applicant_type=="experience"){
        if(this.toggled_once==0){
          exp.classList.toggle("toggle");
          this.toggled_once=1;
        }
        else if(this.toggled_once==1){
          exp.classList.toggle("toggle");
          fresh.classList.toggle("toggle");
        }
      }
    
  }

}
