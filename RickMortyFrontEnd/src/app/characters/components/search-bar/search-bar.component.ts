import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  imports: [HttpClientModule],
  providers: [CharactersService],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  private charactersService: CharactersService = inject(CharactersService);

  constructor() {}

  getCharacters() {
    this.charactersService.getAllCharacters('').then((characters) => {
      console.log(characters);
    }).catch((error) => {
      console.log(error);
    });
  }
}
