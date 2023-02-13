import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  platform: any;
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCr4UWczqMkVyMqKQsCKOT3GJWoh8ifjeY",
      authDomain: "bipjproject-dfe0c.firebaseapp.com",
      projectId: "bipjproject-dfe0c",
      storageBucket: "bipjproject-dfe0c.appspot.com",
      messagingSenderId: "185204542344",
      appId: "1:185204542344:web:288c16a43744c0b469483d",
      measurementId: "G-N74NEYPHRC"
    };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  initializeApp(){

    this.platform.ready().then(() => {



});
  }
}
