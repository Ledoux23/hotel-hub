import { FormGroup } from "@angular/forms";


export class GlobalGenericValidator {

  constructor(
    private validationMessages: { [key: string]: { [key: string]: string } }
  ){ }

  public createErrorMessage(container: FormGroup, isFormSubmitted?: boolean): { [key: string]: string } {
    // const errorMessages = {};
    const errorMessages: { [key: string]: string } = {};

    for(const controlName in container.controls) {

      if(container.controls.hasOwnProperty(controlName)) {

        const selectedControl = container.controls[controlName];

        if(this.validationMessages[controlName]) {

          errorMessages[controlName] = '';

          if((selectedControl.dirty || selectedControl.touched || isFormSubmitted) && selectedControl.errors) {

            Object.keys(selectedControl.errors).map((errorMessageKey: string) => {

              if(this.validationMessages[controlName][errorMessageKey]) {
                errorMessages[controlName] += this.validationMessages[controlName][errorMessageKey] + ' ';
              }

            })
          }
        }
      }
    }
    console.log('errorMessages', errorMessages);
    return errorMessages;
  }
}
