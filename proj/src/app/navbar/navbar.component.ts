import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone : true
})
export class NavbarComponent {

  isMenuOpen = false;

  constructor() {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async ngOnInit() {
    // Check if user is already logged in
}
}
