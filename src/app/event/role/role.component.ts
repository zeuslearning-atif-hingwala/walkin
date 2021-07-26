import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.refreshWalkInList();
  }

  @Input() roleId: number;

  events: any={};
  

  refreshWalkInList(){
    this.service.getWalkInList().subscribe(data=>{
      this.events=data;
      console.log(this.events);
      console.log(this.events.table[0].walkin_id)

    })
    
      
    }



  role_id=[
    {
      "click_id": 1,
      "roles":[
        {
          "_id":1.1,
        "job_name": "Instructional Designer",
        "package": "3,00,000"
        }
      ]
      
    },
    {
      "click_id": 2,
      "roles":[
        {
          "_id":2.1,
        "job_name": "Instructional Designer",
        "package": "3,00,000"
      },
      {
        "_id":2.2,
        "job_name": "Software Engineer",
        "package": "5,75,000"
      },
      {
        "_id":2.3,
        "job_name": "Software Quality Engineer",
        "package": "4,50,000"
      }]
      
    },
    {
      "click_id": 3,
      "roles":[
        {
          "_id": 3.1,
        "job_name": "Instructional Designer",
        "package": "3,00,000"
      },
      {
        "_id": 3.2,
        "job_name": "Software Engineer",
        "package": "5,75,000"
      }]
    }
  ];
  // role_id: any=[1,2];
  click=1;

  hideElement= (id: any) =>{
    console.log(id);
    const element: any= document.getElementById(id);
    console.log(element);
    // element.setAttribute("style","display:none;");
    // element.classList.toggle("toggle");
    if(element.style.display=="block"){
      element.style.display="none";
    }
    else{
      element.style.display="block";
    }

    // const rotate: any= src;
    // console.log(rotate);
    const rotate: any= document.getElementById("p"+id);
    console.log(rotate);
    if(this.click==1){
      rotate.setAttribute("src","../../assets/icons_new/expand_less_black_24dp.svg");
      // rotate.src="../../assets/icons_new/expand_less_black_24dp.svg";
      this.click=2;
    }
    else{
      rotate.setAttribute("src","../../assets/icons_new/expand_more_black_24dp.svg");
      this.click=1;
    }
    
    
  }

}
