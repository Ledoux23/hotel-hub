//Création d'un pipe personnalisé
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replaceComma'
})

export class ReplaceComma implements PipeTransform {
  transform(value: string | null): string {
    if(!!value) { // !! signifie ni null ni undefined
      return value.replace(/,/g, '.');
    } else {
      return '';
    }
  }
}
