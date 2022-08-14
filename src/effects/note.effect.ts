import { NoteService } from 'src/app/services/note.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as NoteActions from 'src/actions/note.action';
import { Note } from 'src/models/note.model';
@Injectable()
export class NoteEffect {
  constructor(private action$: Actions, private noteService: NoteService) {}

  createNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.createNote),
      switchMap((action) => from(this.noteService.createNote(action.note))),
      map(() => NoteActions.createNoteSuccess()),
      catchError((error) => of(NoteActions.createNoteFail({ error: error })))
    )
  );

  getNotes$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.getNotes),
      switchMap(() =>  this.noteService.getNotes()),
      map((notes) => NoteActions.getNotesSuccess({ notes })),
      catchError((error) => of(NoteActions.getNotesFail({ error: error })))
    )

  );

  deleteNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.deleteNote),
      switchMap((action) => from(this.noteService.deleteNote(action.id))),
      map(() => NoteActions.deleteNoteSuccess()),
      catchError((error) => of(NoteActions.deleteNoteFail({ error: error })))
    )
  );
  updateNote$ = createEffect(() =>
    this.action$.pipe(
      ofType(NoteActions.updateNote),
      switchMap((action) => from(this.noteService.updateNote(action.note))),
      map(() => NoteActions.updateNoteSuccess()),
      catchError((error) => of(NoteActions.updateNoteFail({ error: error })))
    )
  );
}
