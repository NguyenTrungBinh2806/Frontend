import { NoteState } from './../../../states/note.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/models/note.model';
import { Store } from '@ngrx/store';
import * as NoteActions from 'src/actions/note.action';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form!: FormGroup;
  note$: Observable<Note[]>;
  noteState$ = this.store.select('note');
  searchText: any;
  constructor( private formBuilder: FormBuilder,private store: Store<{ note: NoteState}>, private noteService: NoteService) {
    this.note$ = this.store.select((state)=>state.note.notes);
    this.form = this.formBuilder.group({
      title: [''],
      date: [''],
      content: [''],

    });

  }

  ngOnInit(): void {
    // this.noteService.getNotes();
    // let test  = this.noteService.getNotes();
    // test.subscribe(data=>{console.log(data)});
    this.store.dispatch(NoteActions.getNotes());
  }

  createNote() {
    let newForm = {
      ...this.form.value,
    };
    this.store.dispatch(NoteActions.createNote({ note: newForm }));
    // this.form.reset(this.form.value);
    this.store.dispatch(NoteActions.getNotes());
    window.location.reload();
  }
  deleteNote(id:string){
    this.store.dispatch(NoteActions.deleteNote({id}));
    alert('delete completed');
    window.location.reload();
  }


}
