import {Component, OnInit,OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'certification-F2',
  templateUrl: './certificationF2.component.html'  
})
export class CertificationF2Component  implements OnInit, OnDestroy {	
	
	constructor() {}
	
	ngOnInit(): void {
		console.log("identity F2 init started identity");	
		
	}
	
	ngOnDestroy() {
		console.log("destroy identity F2");    
	}
	
}