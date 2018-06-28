import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

// configure the application routes.
// appRoutes is an array of JS objects, with each object containing a route or path in the application.
// each route maps a URL (path) to a component.
// appRoutes is passed to the RouterModule.forRoot() to configure the router.
const appRoutes: Routes = [
   { path: 'crisis-center', component: CrisisListComponent },
   // { path: ''}
   //{ path: 'hero/:id', component: HeroDetailComponent },
   { path: 'heroes', component: HeroListComponent}
   //{   // default path
      //path:'',
      //redirectTo: '/heroes',
      //pathMatch: 'full'
   //},
   // wildcard route
   //{ path: '**', component: PageNotFoundComponent } 
];

@NgModule({
   declarations: [
      AppComponent,
      HeroListComponent,
      CrisisListComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes, {enableTracing: true})  // enableTracing is added for debugging
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
