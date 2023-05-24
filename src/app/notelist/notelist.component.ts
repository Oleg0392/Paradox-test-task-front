import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note'
import { Router } from '@angular/router';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent {
  
  notes: Note[];

  constructor(private noteService: NoteService, private router: Router){
    this.notes = this.noteService.getNotes();
    console.log('notes:',this.notes);
  }

  ngOnInit(): void { 
  }

  goEditNote(NoteId: number): void {
    console.log('goEditNote id:',NoteId);
    this.router.navigate(['editnote/' + NoteId.toString()]);
  }

}
