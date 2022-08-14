import { createReducer, on } from '@ngrx/store';
import { NoteState } from 'src/states/note.state';
import * as NoteActions from 'src/actions/note.action';

const initialState: NoteState = {
  notes: [],
  error: '',
  isLoading: false,
};

export const noteReducer = createReducer(
  initialState,
  //POST
  on(NoteActions.createNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.createNoteSuccess, (state) => {
    console.log(state)
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.createNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //GET
  on(NoteActions.getNotes, (state) => {
    console.log(state)
    return {
      ...state,
      isLoading: true,
    };

  }),
  on(NoteActions.getNotesSuccess, (state, { notes }) => {
    return {
      ...state,
      isLoading: false,
      notes: notes,
    };
  }),
  on(NoteActions.getNotesFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //DELETE
  on(NoteActions.deleteNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.deleteNoteSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.deleteNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  //PUT
  on(NoteActions.updateNote, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(NoteActions.updateNoteSuccess, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(NoteActions.updateNoteFail, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  })
);
