import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { HttpClientModule } from '@angular/common/http';
import { character } from '../../interfaces/Character';
import { ResponseAPIGetAll } from '../../interfaces/ResponseApiGetAll';

@Component({
  selector: 'app-search-bar',
  imports: [HttpClientModule],
  providers: [CharactersService],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  private charactersService: CharactersService = inject(CharactersService);

  characters: ResponseAPIGetAll[] = [];

  constructor() {}

  getCharacters(name: string) {
    this.charactersService.getAllCharacters(name).then((characters) => {
      console.log(characters);
      this.characters.push();
    }).catch((error) => {
      console.log(error);
    });
  }
}
