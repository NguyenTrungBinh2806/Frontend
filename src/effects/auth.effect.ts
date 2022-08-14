import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import * as AuthActions from "src/actions/auth.action";
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import * as NoteActions from "src/actions/note.action";
import { Note } from "src/models/note.model";
@Injectable()
export class AuthEffect{
  constructor(private action$: Actions, private authService: AuthService, private http: HttpClient){}

  authEffect = createEffect(() => this.action$.pipe(
    ofType(AuthActions.login),
    switchMap(()=>this.authService.login()),
    map(idToken=> AuthActions.loginSuccess({idToken :idToken})),
    catchError(error => of(AuthActions.loginFailure({error: error})))
  ));


}
