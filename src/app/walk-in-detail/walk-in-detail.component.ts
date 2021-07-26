import { Component, OnInit } from '@angular/core';
import { data } from '../app.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-walk-in-detail',
  templateUrl: './walk-in-detail.component.html',
  styleUrls: ['./walk-in-detail.component.scss']
})
export class WalkInDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // this.refreshWalkInList();
  }
  event_id: number;
  event(id: number){
    console.log(id);
    this.event_id=id;
  }

  

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
      ],
      "slotTime": ["10:00 AM to 12:00 PM", "14:00 PM to 16:00 PM"]
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
      ],
      "slotTime": ["09:00 AM to 11:00 AM", "12:00 PM to 14:00 PM"]
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
      ],
      "slotTime": ["08:00 AM to 10:00 AM", "12:00 PM to 14:00 PM"]
    }
  ]

  events: any={};
  

  // refreshWalkInList(){
  //   this.service.getWalkInList().subscribe(data=>{
  //     this.events=data;
  //     console.log(this.events);
  //     console.log(this.events.table[0].walkin_id)

  //   })
    
      
  //   }

 



 




  // show1=0;
  // flag1=0;
  // elements1: any;
  // showRequisite= (id: number) =>{

  //   const element: any= document.getElementById("id");
  //   console.log(element);
  //   // element.setAttribute("style","display:none;");
  //   // element.classList.toggle("toggle");
  //   if(element.style.display=="block"){
  //     element.style.display="none";
  //   }
  //   else{
  //     element.style.display="block";
  //   }

  //   // /* hideShowElement */
  //   // if (this.flag1==0){
  //   //   this.elements1= document.getElementById("id");
  //   //   this.flag1=1;
  //   // }

  //   // console.log(this.elements1);
  //   // for(let i=0; i<this.elements1.length; i++){
  //   //     this.elements1[i].classList.toggle("toggle");
        
  //   // }

    
  //   /* up&downKey */
  //   const hideShowKey: any= document.querySelector(".expand-svg1");
  //   // hideShowKey?.setAttribute("style","transition: 2s");
  //   // hideShowKey?.setAttribute("src", "")
  //   if(this.show1==1){
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_more_black_24dp.svg");
  //     // hideShowKey.setAttribute("style", "transform: rotate(180deg), transition-duration: 2s");
  //     this.show1=0;
  //   }
  //   else{
  //     hideShowKey.setAttribute("src", "../../assets/icons_new/expand_less_black_24dp.svg");
  //     // hideShowKey?.setAttribute("style", "transform: rotate(180deg), transition: 2s");
  //     this.show1=1;
  //   }
      
  // }

}
