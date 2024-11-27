import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private baseUrl: string = '';
  
  public error: string[] = [];

  private http = inject(HttpClient);
  /*
  async getAllCharacters(): Promise<ResponseApiGetAll[]> {
    try {
      const response =  await firstValueFrom(this.http.get<ResponseApiGetAll[]>(`${this.baseUrl}/characters`))
      return Promise.resolve(response);
    } catch(error) {
      console.log(error);
      let e = error as HttpErrorResponse;
      return Promise.reject(error);
    }
  }*/
}
