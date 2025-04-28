import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone : true
})
export class NavbarComponent {

  isAuthenticated = false;

  constructor() {}

  async ngOnInit() {
    // Check if user is already logged in

    

}
}
