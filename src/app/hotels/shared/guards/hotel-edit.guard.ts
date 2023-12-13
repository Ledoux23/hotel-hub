// import { CanDeactivateFn } from '@angular/router';

// export const hotelEditGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { HotelEditComponent } from '../../hotel-edit/hotel-edit.component';

@Injectable({
  providedIn: 'root'
})

export class hotelEditGuard implements CanDeactivate<HotelEditComponent> {
  canDeactivate(component: HotelEditComponent): boolean {
    if(component.hotelForm.dirty) {
      const hotelName = component.hotelForm.get('hotelName')?.value || 'Nouvel hôtel';
      return confirm(`Voulez-vous annuler les changement effectués sur ${hotelName} ?`);
    }
    return true;
  }
};
