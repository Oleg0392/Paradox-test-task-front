import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note'

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent {
  
  notes: Note[] = [];

  constructor(private noteService: NoteService){
    this.notes = this.noteService.getNotes();
  }

  goEditNote(NoteId: number): void {
    console.log('goEditNote id:',NoteId);
  }

}
