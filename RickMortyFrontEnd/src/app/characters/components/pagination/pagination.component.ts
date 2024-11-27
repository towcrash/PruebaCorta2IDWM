import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  imports: [HttpClientModule],
  providers: [CharactersService],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  constructor() {}

  
}
