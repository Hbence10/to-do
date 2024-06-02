import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HeaderComponent } from './header/header.component';
import { CompletedToDoComponent } from './completed-to-do/completed-to-do.component';
import { ActiveToDoComponent } from './active-to-do/active-to-do.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoListComponent,
    HeaderComponent,
    CompletedToDoComponent,
    ActiveToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
