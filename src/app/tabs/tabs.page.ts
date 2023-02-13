import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
isManager = false;
isUser = false;

  constructor(private authService: AuthService) {
    this.authService.observeAuthState( user => {
      if (user && user.email == 'manager@nyp.sg') { 
        this.isManager = true;
        this.isUser = false;
      }

      else if(user && user.email != 'manager@nyp.sg'){
        this.isManager = false;
        this.isUser = true;
      }
    })
  }

}
