// Displays a particular hero selected from the hero list.

import { switchMap } from 'rxjs/operators';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { slideInDownAnimation } from '../animations';

import { HeroService, Hero } from './hero.service';

@Component({
   templateUrl: './hero-detail.component.html',
   animations: [ slideInDownAnimation ]
})
export class HeroDetailComponent implements OnInit { 
   @HostBinding('@routeAnimation') routeAnimation = true;
   @HostBinding('style.display')   display = 'block';
   @HostBinding('style.position')  position = 'absolute';
   
   hero$: Observable<Hero>;

   constructor (private route: ActivatedRoute,
               private router: Router,
               private service: HeroService) {}
   
   ngOnInit(){
      this.hero$ = this.route.paramMap.pipe(
         switchMap((params: ParamMap) =>
           this.service.getHero(params.get('id')))
      );
   }

   gotHeroes (hero: Hero) {
      let heroId = hero ? hero.id : null;
      this.router.navigate(['/heroes', { id: heroId, foo : 'foo'}]);
   }

}
