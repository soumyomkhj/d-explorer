import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentTab = '';

  constructor() { }

  ngOnInit(): void {
    this.getCurrentTab();
  }

  getCurrentTab(){
    const path = window.location.pathname;
    if (path === '/try'){
      this.currentTab = 'try';
    } else if (path === '/profile'){
      this.currentTab = 'profile';
    } else {
      this.currentTab = 'home';
    }
  }

  pointerClass(){
    const path = window.location.pathname;
    if (path === '/profile'){
      return 'bottom';
    } else if (path === '/' || path === '/course' || path === '/step') {
      return 'top';
    } else {
      return 'default';
    }
  }

}
