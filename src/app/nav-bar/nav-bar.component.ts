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
  }

  tryClass(){
    const path = window.location.pathname;
    if (path === '/try' || path === '/problem') {
      return 'active';
    }
    else{
      return '';
    }
  }

  homeClass(){
    const path = window.location.pathname;
    if (path === '/' || path === '/course' || path === '/step') {
      return 'active';
    }
    else{
      return '';
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
