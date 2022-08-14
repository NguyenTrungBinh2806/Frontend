import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import * as AuthActions from 'src/actions/auth.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<{ auth: AuthState }>) {}



  ngOnInit(): void {
  }


  login() {
    this.store.dispatch(AuthActions.login());
  }

}
