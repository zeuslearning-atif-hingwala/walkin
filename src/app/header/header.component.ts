import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  route: any;

  constructor(private _route: Router) { 
    this.route=_route;
  }

  ngOnInit(): void {
  }

}
