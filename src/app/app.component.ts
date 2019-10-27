import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'HOME',
      url: '/david',
      icon: 'home'
    },
    {
      title: 'QUIZ',
      url: '/quiz-page',
      icon: 'help-circle'
    },
    {
      title: 'FRAGEN',
      url: '/fragen',
      icon: 'clipboard'
    },
    {
      title: 'PROFIL',
      url: '/kaspar',
      icon: 'contact'
    },
    {
      title: 'FRAGEN ERSTELLEN',
      url: '/jakob',
      icon: 'clipboard'
    },
    {
      title: 'FRAGEN ANZEIGEN',
      url: '/fragenanzeigen-page',
      icon: 'archive'
    },
    {
      title: 'FREUNDE',
      url: '/arthur',
      icon: 'contacts'
    },
    {
      title: 'EINSTELLUNGEN',
      url: '/nikolai-page',
      icon: 'settings'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
