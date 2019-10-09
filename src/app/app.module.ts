import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AustronautInformationComponent } from './austronaut-information/austronaut-information.component';
import { AustronautsListComponent } from './austronauts-list/austronauts-list.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyCFi--L39udmqbeJqYtsEKVP3e4gp3ds54',
  authDomain: 'task-challenger.firebaseapp.com',
  databaseURL: 'https://task-challenger.firebaseio.com',
  projectId: 'task-challenger',
  storageBucket: 'task-challenger.appspot.com',
  messagingSenderId: '646412010715',
  appId: '1:646412010715:web:6481ccad2c4509c74838fe'
};
// Initialize Firebase
@NgModule({
  declarations: [
    AppComponent,
    AustronautInformationComponent,
    AustronautsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
