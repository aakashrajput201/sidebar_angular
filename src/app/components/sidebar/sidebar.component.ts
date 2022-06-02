import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activeId = 'home';
  public isMenuCollapsed = false;
  toggled=false;

  toggle(){
   
    this.toggled =!this.toggled;
    console.log(this.toggled);
   }

  constructor() { }

  ngOnInit(): void {
  }

}
