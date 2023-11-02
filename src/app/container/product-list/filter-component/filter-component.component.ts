import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponent {
    @Input()
    all :number = 0;
    
    @Input()
    inStock : number = 0;

    @Input()
    outOfStock : number = 0;

    @Output()
    selectedFilterRadioButtonChanged : EventEmitter<string> = new EventEmitter<string>();
    selectedFilterRadioButton : string = 'all';

    onSelectedFilterRadioButtonChanged(){
      console.log('selectedFilterRadioButton changed ' + this.selectedFilterRadioButton);
      this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    }
}
