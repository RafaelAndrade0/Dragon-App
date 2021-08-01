import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dragon } from '../types/dragon';

@Injectable({
  providedIn: 'root',
})
export class DragonService {
  constructor(private http: HttpClient) {}

  private _selectedDragon = new BehaviorSubject<Dragon>({
    id: '',
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  });
  $selectedDragon = this._selectedDragon.asObservable();

  private _editDragon = new BehaviorSubject<boolean>(false);
  $editDragon = this._editDragon.asObservable();

  listDragons(): Observable<Dragon[]> {
    return this.http
      .get<Dragon[]>('/dragon')
      .pipe(
        map((dragons) => dragons.sort((a, b) => (a.name > b.name ? 1 : -1)))
      );
  }

  addDragon(dragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>('/dragon', dragon);
  }

  editDragon(dragon: Dragon): Observable<Dragon> {
    return this.http.put<Dragon>(`dragon/${dragon.id}`, dragon);
  }

  setSelectedDragon(dragon: Dragon) {
    console.log(dragon);
    this._selectedDragon.next(dragon);
  }

  setEditDragon(status: boolean) {
    this._editDragon.next(status);
  }
}
