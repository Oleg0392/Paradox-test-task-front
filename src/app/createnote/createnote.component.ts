import { Component } from '@angular/core';
import { NoteService } from '../services/note.service'
import { Note } from '../models/note'
import { Router } from '@angular/router'

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent {
  
  noteName: string = '';
  noteText: string = '';
  noteCount: number = -1;

  constructor(private service: NoteService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.noteCount = this.service.getNotes().length;
  }

  addNewNote(): void {
    this.service.getNotes().push(new Note(this.noteCount,this.noteName,this.noteText));
    this.router.navigate(['/notelist']);
  }
}
