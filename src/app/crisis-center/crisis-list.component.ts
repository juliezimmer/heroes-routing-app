import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrisisService, Crisis } from './crisis.service';


@Component({templateUrl: './crisis-list.component.html'})
export class CrisisListComponent implements OnInit {
   crises$: Observable<Crisis[]>;
   private selectedId: number;

   constructor ( private service: CrisisService, 
               private route: ActivatedRoute) {}

   ngOnInit() {
      this.crises$ = this.route.paramMap.pipe(
         switchMap((params: ParamMap) => {
            // (+) before `params.get()` turns the string into a number
            this.selectedId = +params.get('id');
            return this.service.getCrises();
         })
      );
   } 
}     
