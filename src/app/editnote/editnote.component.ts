import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note'
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {

  note: Note;
  noteId: number = NaN;

  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router) {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.service.getNoteById(this.noteId);
    console.log('editNote',this.noteId);
  }

  updateNote(): void {
    this.service.getNoteById(this.noteId).raw = this.note.raw;
    this.router.navigate(['/notelist']);
    this.service.sendData(this.noteId);
  }
}
