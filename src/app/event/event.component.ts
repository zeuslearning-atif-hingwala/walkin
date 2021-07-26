import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event_id: number;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  // recieveId($event: any){
  //   this.event_id= $event;
  //   console.log(this.event_id);
  // }

  
  

  walkInEvents=[
    {
      "id": 1,
      "walkInName": "Walk In for Designer Job Role",
      "date": "10-Jul-2021 to 11-Jul-2021",
      "city": "mumbai",
      "roles": [
        {
          "src": "../../assets/icons/Instructional Designer.svg",
          "name": "Instructional Designer"
        }
      ]
    },
    {
      "id":2,
      "walkInName": "Walk In for Multiple Job Roles",
      "date": "03-Jul-2021 to 04-Jul-2021",
      "city": "mumbai",
      "roles": [
        {
          "src": "../../assets/icons/Instructional Designer.svg",
          "name": "Instructional Designer"
        },
        {
          "src": "../../assets/icons/Software Engineer.svg",
          "name": "Software Engineer"
        },
        {
          "src": "../../assets/icons/Software Quality Engineer.svg",
          "name": "Software Quality Engineer"
        }
      ]
    },
    {
      "id":3,
      "walkInName": "Walk In for Design and Development Job Roles",
      "date": "03-Jul-2021 to 04-Jul-2021",
      "city": "mumbai",
      "roles": [
        {
          "src": "../../assets/icons/Instructional Designer.svg",
          "name": "Instructional Designer"
        },
        {
          "src": "../../assets/icons/Software Engineer.svg",
          "name": "Software Engineer"
        }
      ]
    }
  ]

  show1=0;
  flag1=0;
  elements1: any;
  show2=0;
  flag2=0;
  elements2 : any;
  show3=0;
  flag3=0;
  elements3 : any;
  show4=0;
  flag4=0;
  elements4 :any;
  
  showRequisite= () =>{

    

    /* hideShowElement */
    if (this.flag1==0){
      this.elements1= document.querySelectorAll(".toggle");
      this.flag1=1;
    }

    console.log(this.elements1);
    for(let i=0; i<this.elements1.length; i++){
        this.elements1[i].classList.toggle("toggle");
        
    }

    
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

  // showEngineerDescription= () =>{

  //   /* hideShowElement */
  //   if (this.flag2==0){
  //     this.elements2= document.querySelectorAll(".toggle-engineer");
  //     this.flag2=1;
  //   }

  //   console.log(this.elements2);
  //   for(let i=0; i<this.elements2.length; i++){
  //       this.elements2[i].classList.toggle("toggle-engineer");
        
  //   }

    
  //   /* up&downKey */
  //   const hideShowKey: any= document.querySelector(".expand-svg2");
  //   // hideShowKey?.setAttribute("style","transition: 2s");
  //   // hideShowKey?.setAttribute("src", "")
  //   if(this.show2==1){
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
  //     // hideShowKey.setAttribute("style", "transform: rotate(180deg), transition-duration: 2s");
  //     this.show2=0;
  //   }
  //   else{
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
  //     // hideShowKey?.setAttribute("style", "transform: rotate(180deg), transition: 2s");
  //     this.show2=1;
  //   }
      
  // }

  // showDesignerDescription= () =>{

  //   /* hideShowElement */
  //   if (this.flag3==0){
  //     this.elements3= document.querySelectorAll(".toggle-designer");
  //     this.flag3=1;
  //   }

  //   console.log(this.elements3);
  //   for(let i=0; i<this.elements3.length; i++){
  //       this.elements3[i].classList.toggle("toggle-designer");
        
  //   }

    
  //   /* up&downKey */
  //   const hideShowKey: any= document.querySelector(".expand-svg3");
  //   // hideShowKey?.setAttribute("style","transition: 2s");
  //   // hideShowKey?.setAttribute("src", "")
  //   if(this.show3==1){
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
  //     // hideShowKey.setAttribute("style", "transform: rotate(180deg), transition-duration: 2s");
  //     this.show3=0;
  //   }
  //   else{
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
  //     // hideShowKey?.setAttribute("style", "transform: rotate(180deg), transition: 2s");
  //     this.show3=1;
  //   }
      
  // }

  // showQualityEngineerDescription= () =>{

  //   /* hideShowElement */
  //   if (this.flag4==0){
  //     this.elements4= document.querySelectorAll(".toggle-quality");
  //     this.flag4=1;
  //   }

  //   console.log(this.elements4);
  //   for(let i=0; i<this.elements4.length; i++){
  //       this.elements4[i].classList.toggle("toggle-quality");
        
  //   }

    
  //   /* up&downKey */
  //   const hideShowKey: any= document.querySelector(".expand-svg4");
  //   // hideShowKey?.setAttribute("style","transition: 2s");
  //   // hideShowKey?.setAttribute("src", "")
  //   if(this.show4==1){
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
  //     // hideShowKey.setAttribute("style", "transform: rotate(180deg), transition-duration: 2s");
  //     this.show4=0;
  //   }
  //   else{
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
  //     // hideShowKey?.setAttribute("style", "transform: rotate(180deg), transition: 2s");
  //     this.show4=1;
  //   }
      
  // }

  
}
