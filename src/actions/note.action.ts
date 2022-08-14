import { createAction, props } from '@ngrx/store';
import { Note } from 'src/models/note.model';

//POST
export const createNote = createAction(
  '[Note] create Note',
  props<{ note: Note }>()
);

export const createNoteSuccess = createAction(
  '[Note] Add Note Success',
);

export const createNoteFail = createAction(
  '[Note] Add Note Fail',
  props<{ error: string }>()
);

//GET
export const getNotes = createAction(
  '[Note] Get Notes',
);

export const getNotesSuccess = createAction(
  '[Note] Get Notes Success',
  props<{ notes: Note[] }>()
);

export const getNotesFail = createAction(
  '[Note] Get Notes Fail',
  props<{ error: string }>()
);

//DELTE
export const deleteNote = createAction(
  '[Note] Delete Note',
  props<{ id: string }>()
)
export const deleteNoteSuccess = createAction(
  '[Note] Delete Note Success',
);
export const deleteNoteFail = createAction(
  '[Note] Delete Note Fail',
  props<{ error: string }>()
);

//PUT
export const updateNote = createAction(
  '[Note] Update Note',
  props<{ note: Note }>()
);
export const updateNoteSuccess = createAction(
  '[Note] Update Note Success',
);
export const updateNoteFail = createAction(
  '[Note] Update Note Fail',
  props<{ error: string }>()
);

