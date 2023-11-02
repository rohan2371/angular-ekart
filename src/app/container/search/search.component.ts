import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
class SearchComponent {
  searchText : string = "";

  @Output()
  searchTextChanged = new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
    console.log(this.searchText);
  }

  handleChange = (event:any)=>{
    this.searchText = event.target.value;
   
  }

  
}

export default SearchComponent;
