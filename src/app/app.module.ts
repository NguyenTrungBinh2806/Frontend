import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NoteEffect } from 'src/effects/note.effect';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { authReducer } from 'src/reducers/auth.reducer';
import { AuthEffect } from 'src/effects/auth.effect';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { noteReducer } from 'src/reducers/note.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, MainComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({ auth: authReducer, note: noteReducer }, {}),
    EffectsModule.forRoot([AuthEffect, NoteEffect]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
