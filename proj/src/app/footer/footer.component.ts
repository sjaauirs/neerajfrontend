import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',

  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  standalone : true
})
export class FooterComponent {

  isAuthenticated = false;

  constructor() {}

  async ngOnInit() {
    // Check if user is already logged in

    

}
}
