import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditnoteComponent } from './editnote/editnote.component';
import { NotelistComponent } from './notelist/notelist.component';
import { TaglistComponent } from './taglist/taglist.component';
import { HomeComponent } from './home/home.component';
import { CreatenoteComponent } from './createnote/createnote.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'createnote', component: CreatenoteComponent},
  {path: 'editnote', component: EditnoteComponent},
  {path: 'notelist', component: NotelistComponent},
  {path: 'taglist', component: TaglistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EditnoteComponent,
    NotelistComponent,
    TaglistComponent,
    HomeComponent,
    CreatenoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
