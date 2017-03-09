import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App, providers, routes } from './app'
import { HttpModule } from '@angular/http'
import { Main, Notes, AddTrip, Login, Trips } from './app/containers'
import { NoteService, ApiService } from './app/services'
import { ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from './app/containers/control-messages.component';
import { ValidationService } from './app/containers/validation.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
// import { AppModal }   from './app/ui/note-creator/modal.component';
import {  Router, NavigationEnd } from '@angular/router';
declare let ga: Function;

import { 
  AppBar,
  NoteCard,
  NoteCreator,
  ColorPicker,
} from './app/ui'

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    Notes,
    NoteCreator,
    ColorPicker,
    AddTrip,
    Login,
    Trips,
    ControlMessagesComponent,
    // AppModal
  ],
  providers: [ValidationService, NoteService, ApiService ],
  imports: [
     HttpModule, 
     BrowserModule, 
     FormsModule, 
     routes, 
     ReactiveFormsModule,     
     BrowserModule, 
     // ModalModule.forRoot(),
     // BootstrapModalModule 
   ],
     bootstrap: [App, 
     // AppModal
     ]
})
export class AppModule {
   constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }


}

platformBrowserDynamic().bootstrapModule(AppModule)
