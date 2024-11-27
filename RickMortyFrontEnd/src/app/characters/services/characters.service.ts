import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ResponseAPIGetAll } from '../interfaces/ResponseApiGetAll';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private baseUrl: string = 'https://rickandmortyapi.com/api';
  
  public error: string[] = [];

  private http = inject(HttpClient);
  
  async getAllCharacters(name: string): Promise<ResponseAPIGetAll[]> {
    try {

      const queryParams = new HttpParams().set('name', name).toString();

      const response =  await firstValueFrom(this.http.get<ResponseAPIGetAll[]>(`${this.baseUrl}/character?${queryParams}`))
      return Promise.resolve(response);
    } catch(error) {
      console.log(error);
      let e = error as HttpErrorResponse;
      return Promise.reject(error);
    }
  }
}
