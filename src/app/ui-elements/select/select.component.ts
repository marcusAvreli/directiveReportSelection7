import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'control-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  implements OnInit {
	 @Input() public control: FormControl = new FormControl();
  @Input() public label: string;
  @Input() public placeHolder: string;
  @Input() public controlName: string;

  @Input() public disabled: boolean = false;
  @Input() public readonly: boolean = false;
  @Input() public helptext: string = '';
  @Input() public required: boolean = false;
  @Input() public textField: string = '';
  @Input() public valueField: string = '';
  @Input() public valuePrimitive: boolean = false;
  @Input() public showId: boolean = false;
  @Input() public allowNulls: boolean = false;
  @Output() public eventValueChange = new EventEmitter();
  private options: string[] = [];
  private privControl: FormControl = new FormControl({});
  private selectedValue: any;
  private _data = new BehaviorSubject<string[]>([]);

  @Input()
  set dataSource(value) {
    // set the latest value for _data BehaviorSubject,
	console.log("Recevied_Value:"+value);
    this._data.next(Object.assign([], value));
  }
  get dataSource() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
  }

  constructor() {
    
  }

  ngOnInit(): void {
    this._data
      .subscribe(x => {
		  
        this.options = this.dataSource;
      });
  }

  ngOnDestroy(): void {
    if(this._data!=null){
      this._data.unsubscribe();
    }
    if(this.eventValueChange!=null){
      this.eventValueChange.unsubscribe();
    }
  }

  functionValueChange(event) {
    if (this.valuePrimitive) {
      this.eventValueChange.emit(event);
      return;
    }
    if(event==null){
      this.eventValueChange.emit(null);
      return;
    }
    this.eventValueChange.emit(this.options.find(x => x[this.valueField] === event[this.valueField]));
  }

}