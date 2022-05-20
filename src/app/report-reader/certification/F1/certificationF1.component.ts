import {Component, OnInit,OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'certification-F1',
  templateUrl: './certificationF1.component.html',
  
  
})
export class CertificationF1Component  implements OnInit, OnDestroy {	
	
	constructor() {}
	
	ngOnInit(): void {
		console.log("identity f1 init started identity");	
		
	}
	
	ngOnDestroy() {
		console.log("destroy identity f1");    
	}
	proveedor_OnSelect(response){
	
	}
}