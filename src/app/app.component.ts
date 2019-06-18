import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon blog !';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAfLW2KVXKP8xDZzWboYam1enUb6Bt-pkg',
      authDomain: 'http-client-demo-50ba3.firebaseapp.com',
      databaseURL: 'https://http-client-demo-50ba3.firebaseio.com',
      projectId: 'http-client-demo-50ba3',
      storageBucket: 'http-client-demo-50ba3.appspot.com',
      messagingSenderId: '117277741509',
      appId: '1:117277741509:web:c642a8c260215186'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
