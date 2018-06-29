// This component route is a child of the CrisisList component route.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService, Crisis } from './crisis.service';

@Component({
   templateUrl: './crisis-detail.component.html',
})
export class CrisisDetailComponent implements OnInit { 
   
   crisis$: Observable< Crisis>;

   constructor (private route: ActivatedRoute,
               private router: Router,
               private service: CrisisService) {}
   
   ngOnInit(){
      this.crisis$ = this.route.paramMap.pipe(
         switchMap((params: ParamMap) =>
           this.service.getCrisis(params.get('id')))
      );
   }

   gotHeroes (crisis: Crisis) {
      let crisisId = crisis ? crisis.id : null;
      // for relative navigation
      this.router.navigate(['../', { id: crisisId, foo : 'foo'}],
         {relativeTo: this.route });
   }

}