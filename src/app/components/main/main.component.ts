import { NoteState } from './../../../states/note.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/models/note.model';
import { Store } from '@ngrx/store';
import * as NoteActions from 'src/actions/note.action';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  note$: Observable<Note[]>;
  noteState$ = this.store.select('notes');
  constructor( private store: Store<{ notes: NoteState}>) {
    this.note$ = this.store.select((state)=>state.notes.notes);
  }

  ngOnInit(): void {
    // this.noteState$.subscribe((state) => {
    //   console.log(state);
    // });
    this.store.dispatch(NoteActions.getNotes());
  }


}
