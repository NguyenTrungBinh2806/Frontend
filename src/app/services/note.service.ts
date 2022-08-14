import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  getNotes():Observable<Note[]>{
    return this.http.get<Note[]>(`http://localhost:3000/note/all`);
  }
  getNoteById(id:string):Observable<Note[]>{
    return this.http.get<Note[]>(`http://localhost:3000/note/?id=${id}`+id);
  }
  createNote(note:Note):Observable<Note[]>{
    return this.http.post<Note[]>(`http://localhost:3000/note/`,note);
  }
  updateNote(note:Note):Observable<Note[]>{
    return this.http.put<Note[]>(`http://localhost:3000/note/`,note);
  }
  deleteNote(id:string):Observable<Note[]>{
    return this.http.delete<Note[]>(`http://localhost:3000/note/?id=`+id);
  }
}
