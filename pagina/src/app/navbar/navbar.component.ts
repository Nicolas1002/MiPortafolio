import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {




 home(){
  document.getElementById("home")?.scrollIntoView( {behavior: 'smooth'})
 }
 aboutme(){
  document.getElementById("aboutme")?.scrollIntoView( {behavior: 'smooth'})
 }
 work(){
  document.getElementById("work")?.scrollIntoView( {behavior: 'smooth'})
 }
 contact(){
  document.getElementById("contact")?.scrollIntoView( {behavior: 'smooth'})
 }
}
