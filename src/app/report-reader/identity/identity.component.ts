import {Component, Inject, Input,OnInit,ViewChild,ViewChildren,OnDestroy,AfterViewInit,AfterContentChecked,ChangeDetectorRef,  ComponentFactoryResolver} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ReportDirective } from '../shared/report.directive';
import { ReportService } from '../shared/report.service';
import {ReportItem } from '../shared/report.item';




import { Validators } from '@angular/forms';
@Component({
  selector: 'app-identity',
  styleUrls: ['identity.component.scss'],
  templateUrl: './identity.component.html',
 
  
})
export class IdentityComponent implements OnInit{	
	
	proveedorArray: any[];
	 //  @Input() post: any;
label:string;
	facturaForm: FormGroup = new FormGroup({
		Id:new FormControl(),
		Factura: new FormControl(),
		Fecha:new FormControl(),
		Ncliente: new FormControl(),
		ClaveEmpresa:new FormControl(),
		ClaveProveedor: new FormControl()
	});
	disabled = false;
	selectorForm: FormGroup = new FormGroup({});

	
  ngOnInit(): void {
		console.log("identity init started identity");	
		console.log("identity init started identity");	
		this.initCatalogos();

	}	
	constructor(
	private reportService: ReportService,
	

	
	) {}
	
	initCatalogos() {	
		const array = [];
		array.push({"name": "Report_1","id": "1"});
		array.push({"name": "Report_2","id": "2"});
		this.proveedorArray = array;
	}	
	
	
	
proveedor_OnSelect(response){
		console.log("proveedor_OnSelect:"+response);
		if(response!=null){
			this.label=response;
			//const currentComponent = this.components[response-1];			
			//let	 rI = new ReportItem(currentComponent);			
			//this.reportService.loadComponent(this.adHost.viewContainerRef, rI);
			
		} else {
		 
		}
	}  
  
}