// child routes are defined within the parent crisis-center routes.

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
 
const crisisCenterRoutes: Routes = [
   { // parent route
      path: 'crisis-center',  
      component: CrisisCenterComponent,
      children: [
         { // child of crisis-center
            path: '',
            component: CrisisListComponent,
            children: [ // these routes navigate to the crisis center child components
               {  
                  path: 'id',
                  component: CrisisDetailComponent
               },
               {
                  path: '',
                  component: CrisisCenterHomeComponent
               }
            ]
         }
      ] 
   },
];  
  
@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }