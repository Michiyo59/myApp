import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Réception',
      url: '/folder/Réception',
      icon: 'mail'
    },
    {
      title: 'Envoi',
      url: '/folder/Envoi',
      icon: 'paper-plane'
    },
    {
      title: 'Favoris',
      url: '/folder/Favoris',
      icon: 'heart'
    },
    {
      title: 'Archives',
      url: '/folder/Archives',
      icon: 'archive'
    },
    {
      title: 'Corbeille',
      url: '/folder/Corbeille',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Famille', 'Amis', 'Notes', 'Travail', 'Autres'];

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

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
