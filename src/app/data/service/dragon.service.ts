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

  private _showEditDragonForm = new BehaviorSubject<boolean>(false);
  $showEditDragonForm = this._showEditDragonForm.asObservable();

  private _showDeleteDragon = new BehaviorSubject<boolean>(false);
  $showDeleteDragon = this._showDeleteDragon.asObservable();

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

  deleteDragon(id: string): Observable<Dragon> {
    return this.http.delete<Dragon>(`dragon/${id}`);
  }

  setSelectedDragon(dragon: Dragon) {
    console.log(dragon);
    this._selectedDragon.next(dragon);
  }

  setShowEditDragonForm(status: boolean) {
    this._showEditDragonForm.next(status);
  }

  setShowDeleteDragon(status: boolean) {
    this._showDeleteDragon.next(status);
  }
}
