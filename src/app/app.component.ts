import { Component } from '@angular/core';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private noteService: NoteService) {      
  }

  async LoadData(): Promise<void> {
    this.noteService.getData();
  }
  
}
