// contains the Routing Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// configure the application routes.
// appRoutes is an array of JS objects, with each object containing a route or path in the application.
// each route maps a URL (path) to a component.
// appRoutes is passed to the RouterModule.forRoot() to configure the router.
const appRoutes: Routes = [
   { path: 'crisis-center', component: CrisisCenterComponent },
   // { path: ''}
   //{ path: 'hero/:id', component: HeroDetailComponent },

   {   // default path
      // a redirectTo path requires a pathMatch property
      path:'',
      redirectTo: '/heroes',
      pathMatch: 'full'
   },
   // wildcard route
   { path: '**', component: PageNotFoundComponent } 
];

@NgModule ({
   imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: true})
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }