import { Component, OnInit } from "@angular/core"; 

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
/*settings menu*/
declare interface RouteInfo2 {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
 
 /*settings menu end*/
export const ROUTES: RouteInfo[] = [
  {
    path: "dashboard2",
    title: "Admin Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },   
  {
    path: "add-users2",
    title: "Add User",
    rtlTitle: "لوحة القيادة",
    icon: "icon-simple-add",
    class: ""
  },  
];

@Component({
  selector: "app-sidebar2",
  templateUrl: "./sidebar2.component.html",
  styleUrls: ["./sidebar2.component.css"]
})
export class Sidebar2Component implements OnInit {
  menuItems: any[];
  menuItems2: RouteInfo2[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem); 
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
