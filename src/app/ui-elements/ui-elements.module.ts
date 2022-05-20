import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { AgGridModule } from "ag-grid-angular/main";
//import {UIAgGridComponent} from './simple-ag-grid/simple-ag-grid.component';
import {LoaderComponent} from './loader/loader.component';
// modules
//import {AlertModule} from 'ngx-bootstrap';
//import {BsDatepickerModule} from 'ngx-bootstrap';

// components
//import {MessagesValidationComponent} from './messages-validation/messages-validation';
import {UIInputComponent} from './ui-input/ui-input';
import { SelectComponent } from './select/select.component';


//dynamic component parts
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-control/containers/dynamic-form/dynamic-form.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';

//import {UISelectComponent} from './ui-select/ui-select';
//import {UIReviewComponent} from './ui-review/ui-review';
//import {UINumberPickerComponent} from './ui-number-picker/ui-number-picker';
//import {UIDatePickerComponent} from './ui-datepicker/ui-datepicker.component';
//import {UIPasswordComponent} from './ui-password/ui-password';

// directives
import {EmailValidatorDirective} from './directives/email.directive';
/*import {HexadecimalValidatorDirective} from './directives/hexadecimal.directive';
import {NumericValidatorDirective} from './directives/numeric.directive';
import {DateValidatorDirective} from './directives/date.directive';

import {MaxDateTodayValidatorDirective} from './directives/maxDateToday.directive';
import {PasswordValidatorDirective} from './directives/password-valid.directive';
*/
import {FocusDirective} from './directives/focus.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
	//AgGridModule.withComponents([])
    //AlertModule.forRoot(),
    //BsDatepickerModule.forRoot()
	///dynamic control 
	//CommonModule,
   // ReactiveFormsModule
  ],
  declarations: [
  	//UIAgGridComponent,
	LoaderComponent,
    UIInputComponent,
	SelectComponent,
   // UINumberPickerComponent,
    //UISelectComponent,
   // UIReviewComponent,
   // UIDatePickerComponent,
   // UIPasswordComponent,
   // MessagesValidationComponent,
   EmailValidatorDirective,
   
   /* HexadecimalValidatorDirective,
    NumericValidatorDirective,
    DateValidatorDirective,
    
    MaxDateTodayValidatorDirective,
    PasswordValidatorDirective,
   */
    FocusDirective,
	///dynamic control
	DynamicFieldDirective,
    DynamicFormComponent,
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  providers: [],
  exports: [
  	//UIAgGridComponent,
	LoaderComponent,
	EmailValidatorDirective,
    UIInputComponent,
	SelectComponent,
   /* UISelectComponent,
    UINumberPickerComponent,
    UIReviewComponent,
    UIDatePickerComponent,
    UIPasswordComponent,
    MessagesValidationComponent,
    HexadecimalValidatorDirective,
    NumericValidatorDirective,
    DateValidatorDirective,
    ,
    MaxDateTodayValidatorDirective,
    PasswordValidatorDirective*/
	DynamicFormComponent
  ],
  ///dynamic control
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UIElementsModule {
}