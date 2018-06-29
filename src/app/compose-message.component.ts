import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { slideInDownAnimation } from './animations';

@Component({
   templateUrl: './compose-message.component.html',
   styles: [':host { position: relative; bottom" 10% }'],
   animations: [ slideInDownAnimation ]
})
export class ComposeMessageComponent {
   @HostBinding('@routeAnimation') routeAnimation = true;
   @HostBinding('style.display')   display = 'block';
   @HostBinding('style.position')  position = 'absolute';

   details: string;
   message: string;
   sending = false;

   constructor( private router: Router){}

   // ComposeMessageComponent slass methods
   send() {
      this.sending = true;
      this.details = 'Sending message...';

      setTimeout(() => {
         this.sending = false;
         this.closePopup();
      }, 1000);
   }

   cancel(){
      this.closePopup();
   }

   closePopup(){
      this.router.navigate([{ outlets: { popup: null }}]);
   }
}

