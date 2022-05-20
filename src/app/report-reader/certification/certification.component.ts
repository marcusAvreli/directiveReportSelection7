import {Component, Inject, OnInit,ViewChild,OnDestroy, ComponentFactoryResolver} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ReportDirective } from '../shared/report.directive';
import { ReportService} from '../shared/report.service';
import {ReportItem } from '../shared/report.item';
import {CertificationF1Component} from './F1/certificationF1.component';
import {CertificationF2Component} from './F2/certificationF2.component';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  
})
export class CertificationComponent implements OnInit, OnDestroy {
	proveedorArray: any[];
	facturaForm: FormGroup = new FormGroup({
		Id:new FormControl(),
		Factura: new FormControl(),
		Fecha:new FormControl(),
		Ncliente: new FormControl(),
		ClaveEmpresa:new FormControl(),
		ClaveProveedor: new FormControl()
	});
	disabled = false;
	form: FormGroup = new FormGroup({});
	@ViewChild(ReportDirective) adHost: ReportDirective;

	public components = [CertificationF1Component, CertificationF2Component];
	public currentComponent = null;
	constructor(private formBuilder: FormBuilder
	,private reportService: ReportService
	,private componentFactoryResolver: ComponentFactoryResolver
	) {}
	
	ngOnInit(): void {
		console.log("certification init started");	
		this.initCatalogos();
	}
	initCatalogos() {	
		const array = [];
		array.push({"name": "Certification_Report_2","id": "2"});
		array.push({"name": "Certification_Report_1","id": "1"});
		this.proveedorArray = array;
	}	
	ngOnDestroy() {
		console.log("destroy certification");    
	}
	proveedor_OnSelect(response){
		console.log("proveedor_OnSelect:"+response);
		if(response!=null){		
			const currentComponent = this.components[response-1];			
			let	 rI = new ReportItem(currentComponent);			
			this.reportService.loadComponent(this.adHost.viewContainerRef, rI);
		} else {
		 
		}
	}	
}