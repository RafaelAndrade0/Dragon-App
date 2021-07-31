import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon } from '../types/dragon';

@Injectable({
  providedIn: 'root',
})
export class DragonService {
  constructor(private http: HttpClient) {}

  listDragons(): Observable<Dragon[]> {
    return this.http.get<Dragon[]>('/dragon');
  }

  addDragon(dragon: Dragon) {
    return this.http.post('/dragon', dragon);
  }
}
