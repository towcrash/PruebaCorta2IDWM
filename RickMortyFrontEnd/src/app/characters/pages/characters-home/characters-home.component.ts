import { Component } from '@angular/core';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-characters-home',
  imports: [PaginationComponent, SearchBarComponent],
  templateUrl: './characters-home.component.html',
  styleUrl: './characters-home.component.css'
})
export class CharactersHomeComponent {

}
