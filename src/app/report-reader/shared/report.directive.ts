import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[report-host]',
})
export class ReportDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}