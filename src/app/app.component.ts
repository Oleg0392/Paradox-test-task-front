import { Component } from '@angular/core';
import { NoteService } from './services/note.service';
import { TagService } from './services/tag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private noteService: NoteService, private tagService: TagService) {      
  }
  
}
