import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-requisite',
  templateUrl: './pre-requisite.component.html',
  styleUrls: ['./pre-requisite.component.scss']
})
export class PreRequisiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() event_id: number;
  walkin_id=[1,2,3];

  show1=0;
  flag1=0;
  elements1: any;
  showRequisite= (id:number) =>{

    const element: any= document.getElementById("p"+id);
    // element.classList.toggle(".toggle");
    // element.setAttribute("style","display:none;");
    // element.classList.toggle("toggle");
    if(element.style.display=="block"){
      element.style.display="none";
    }
    else{
      element.style.display="block";
    }
    console.log(element);

    // /* hideShowElement */
    // if (this.flag1==0){
    //   this.elements1= document.getElementById("id");
    //   this.flag1=1;
    // }

    // console.log(this.elements1);
    // for(let i=0; i<this.elements1.length; i++){
    //     this.elements1[i].classList.toggle("toggle");
        
    // }

    
    /* up&downKey */
    const hideShowKey: any= document.querySelector(".expand-svg1");
    // hideShowKey?.setAttribute("style","transition: 2s");
    // hideShowKey?.setAttribute("src", "")
    if(this.show1==1){
      hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
      // hideShowKey.setAttribute("style", "transform: rotate(180deg), transition-duration: 2s");
      this.show1=0;
    }
    else{
      hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
      // hideShowKey?.setAttribute("style", "transform: rotate(180deg), transition: 2s");
      this.show1=1;
    }
      
  }

  
}

