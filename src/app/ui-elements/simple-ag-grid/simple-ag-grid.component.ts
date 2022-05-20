import { Component, OnInit, Input,ChangeDetectionStrategy,OnChanges,SimpleChanges,ViewChild,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
//import { AgGridNg2 } from 'ag-grid-angular';



@Component({
  selector: 'simple-ag-grid',
  templateUrl: './simple-ag-grid.component.html',
      changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./simple-ag-grid.component.css']
})
export class UIAgGridComponent implements OnInit,OnChanges {

  @Input() colHeadersObsrv: Observable<any[]>;
  @Input() rowDataObsrv: Observable<any[]>;
 // @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  // @ViewChild('agGrid') agGrid: AgGridNg2;


  // private rowData = [];
  private columnDefs = [];
  private headerStrArr = [];

  private rowDataSub = new BehaviorSubject<any[]>(undefined);
  private colmnSub = new BehaviorSubject<any[]>(undefined);

  rowDataObs = this.rowDataSub.asObservable();
  colmnObs = this.colmnSub.asObservable();


  overlayNoRowsTemplate;

  constructor(
     private cd: ChangeDetectorRef) {  }


  ngOnInit() {
	    console.log("ngOnInitSimpleGrid");
    this.setNoRowTxt();
	//this.colHeadersObsrv.subscribe(console.log);
	//this.rowDataObsrv.subscribe(console.log);
    this.colHeadersObsrv.subscribe(head => this.processHeaders(head));
  }

  onGridReady(params) {
	  console.log("Grid is Ready");
    this.rowDataObsrv.subscribe(rows => {
      const rowData = this.processRowData(rows);
    //  console.log('onGridReady ' + rowData[0]);
//rowData.subscribe(console.log);

      params.api.setRowData(rowData);

      if (rowData && rowData.length > 0) {
        console.log('hideOverlay ');
        params.api.hideOverlay();
      } else {
        console.log('showNoRowsOverlay ');
       // params.api.showNoRowsOverlay();
      }
    });
  }

  private processHeaders(heads) {
	    //heads.subscribe(console.log);
//console.log("processHeadersArray"+heads[0]);

    // console.log(' processHeaders ' + typeof(heads));
    if (!heads) { return; }
var testMe = Observable.of(heads);
//Observable.of(heads).subscribe(val => this.headerStrArr = val);
//res.subscribe(val => this.myReportsArray = val);
   // this.headerStrArr = heads;
   let counter =0;
   for (let i of heads ){
	   console.log("*****pushing*******"+i+ " counter" +counter);
	  
	   if(counter ==0){
	     this.columnDefs.push({
        headerName: i
        , field: i
        , width: 100
			,checkboxSelection: true
		,headerCheckboxSelection: true
	   });}
	   else{
		    this.columnDefs.push({
        headerName: i
        , field: i
        , width: 100
		
	   });
	   }
	   counter+=1;
   }
  /*  this.columnDefs.push({
        headerName: "name"
        , field: "name"
        , width: 100
      });*/
   /* testMe.forEach(h => {
		console.log(h);
      this.columnDefs.push({
        headerName: h
        , field: h
        , width: 100
      });
    });*/
    this.colmnSub.next(this.columnDefs);
  }

  private processRowData(rows: any[]): any[] {
   // console.log('private processRowData Checkpost: ' + rows[0].name);
    if (!rows || rows.length === 0) { return []; }

    const rowData = [];
    for (const d of rows) {
		//console.log("Filling Rows: "+d);
      const newData = {};
      this.headerStrArr.forEach(h => Object.defineProperty(newData, h, { value: d[h] }));
	  //console.log("Filling Rows2: "+newData["Hello"]);
      rowData.push(newData);
    }
    return rows;
  }
   ngOnChanges(changes: SimpleChanges) { 
   
   console.log("On changes");
   this.rowDataObsrv.subscribe(console.log);
    }

  private setNoRowTxt() {
    this.overlayNoRowsTemplate = `No Records were fetched. Please try again later.`;
  }
  onBtnExport(): void {
    const params = {
      columnGroups: true,
      allColumns: true,
	  onlySelected:true,
      fileName: 'filename_of_your_choice',
      //columnSeparator: document.querySelector("#columnSeparator")
    };
//	const selectedNodes = this.agGrid.api.getSelectedNodes();
   //console.log('selectedNodes', selectedNodes);
    
	//this.agGrid.api.exportDataAsCsv(params);
}
}