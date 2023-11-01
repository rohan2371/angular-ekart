import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
class SearchComponent {
  searchText : string = "";

  handleChange = (event:any)=>{
     this.searchText = event.target.value;
  }
}

export default SearchComponent;
