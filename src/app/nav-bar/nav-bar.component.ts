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
    else if (path === '/try' || path === '/problem') {
      return '';
    } else {
      return 'active';
    }
  }
  pointerClass(){
    const path = window.location.pathname;
    if (path === '/try' || path === '/problem') {
      return 'default';
    }
    // else if (path === '/' || path === '/course' || path === '/step') {
    //   return 'top';
    // } 
    else {
      return 'top';
    }
  }

}
