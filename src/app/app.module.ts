import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//import { reducer } from "app/ngrx/reducers";
//import { StoreModule } from '@ngrx/store';
//import { reducer } from './reducers/myReport.reducer';
//import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import {ReportReaderComponent} from './report-reader/report-reader.component';
import {ReportReaderModule} from './report-reader/report-reader.module';
//import { DynamicFormModule } from './report-reader/shared/dynamic-form/dynamic-form.module';
//import { ReportReaderComponent } from './report-reader/report-reader.component';
//import {GoogleBooksService} from './services/idmReports';
//https://github.com/jvandemo/angular-environment-variables-demo/blob/master/src/app/env.service.ts
@NgModule({
  declarations: [
    AppComponent   
  ],
   imports: [
   BrowserModule,
	FormsModule,
	CoreModule,
    SharedModule,	
	ReportReaderModule,
	ReactiveFormsModule,
	//DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
