import {Component, Inject, Input,OnInit,ViewChild,ViewChildren,OnDestroy,AfterViewInit,AfterContentChecked,ChangeDetectorRef,  ComponentFactoryResolver} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ReportDirective } from '../shared/report.directive';
import { ReportService } from '../shared/report.service';
import {ReportItem } from '../shared/report.item';


import { DynamicFormComponent } from '../../ui-elements/dynamic-control/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../ui-elements/dynamic-control/models/field-config.interface';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-filter',
    styleUrls: ['filter.component.scss'],

  templateUrl: './filter.component.html',
 /* template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `,*/
  //styleUrls: ['./identity.component.scss'],
  
})
export class FilterComponent implements OnInit,AfterViewInit{	
	@Input() public label: string;
	@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
	config: FieldConfig[];
	/*config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];*/
  ngOnInit(): void {
		console.log("identity init started identity");	
		console.log("label received_1: "+this.label);	
		

	}
 
	constructor(
		private reportService: ReportService,
		private cdref: ChangeDetectorRef
	) {}
	
	
	
	ngAfterViewInit() {
		if(this.form.controls.length <1){
			console.log("dont have controls");
		}else{
			console.log("more");
		}
		console.log("label received_3: "+this.label);		
		console.log("ngAfterViewInit started");
		let previousValid = this.form.valid;
		this.form.changes.subscribe(() => {
		if (this.form.valid !== previousValid) {
			previousValid = this.form.valid;
			this.form.setDisabled('submit', !previousValid);
		}
		});

		this.form.setDisabled('submit', true);
		//this.form.setValue('name', '
		//');
		this.cdref.detectChanges();
		console.log("ngAfterViewInit finished");
	}
	ngAfterContentChecked(){
		console.log("ngAfterContentChecked started");
		if(this.label=="1"){
			this.config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name another choise',
      validation: [Validators.required, Validators.minLength(4)]
		}];
		}else{
			this.config = [
  {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    }];
		}
		
		if(this.form.controls.length <1){
		console.log("dont have controls");
		
		}else{	
		
		}    
		console.log("label received_2: "+this.label);		
		console.log("ngAfterContentChecked finished");

	}
  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}