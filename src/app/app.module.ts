// This is the Routing Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
   declarations: [
      AppComponent,
      CrisisCenterComponent,
      PageNotFoundComponent,
      CrisisCenterComponent
   ],
   imports: [ // order matters!!!
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      HeroesModule,
      AppRoutingModule // this needs to be last, or at least AFTER the HeroesModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
