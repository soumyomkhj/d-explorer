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
  aboutClass(){
      const path = window.location.pathname;
      if (path === '/about' || path === '/' ) {
        return 'hidden';
      }
      else{
        return '';
      }
    }
  profileClass(){
      const path = window.location.pathname;
      if (path === '/profile') {
        return 'active';
      }
      else{
        return '';
      }
    }
  homeClass(){
    const path = window.location.pathname;
    if (path === '/try' || path === '/problem' || path === '/profile') {
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
    else if (path === '/profile') {
      return 'bottom';
    } 
      else {
      return 'top';
    }
  }

}
