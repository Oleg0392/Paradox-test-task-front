import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  tags1: Tag[] = [
    new Tag(1,'sdf'),
    new Tag(2,'fghfh')
  ];

  tags2: Tag[] = [
    new Tag(1,'dfgfd'),
    new Tag(2,'dfg'),
    new Tag(5,'sag')
  ];

  tags3: Tag[] = [
    new Tag(1,'tytr'),
    new Tag(2,'hgjhg'),
    new Tag(8,'uyoui'),
    new Tag(9,'wqwe')
  ];
  
  notes: Note[] = [
    new Note(0,'note1','sdkddsfdsfdsf',this.tags1),
    new Note(1,'note2','sdkddsfdsfdsf',this.tags2),
    new Note(2,'note3','sdkddsfdsfdsf',this.tags3),
    new Note(3,'note4','sdkddsfdsfdsf',this.tags1),
    new Note(4,'note5','sdkddsfdsfdsf',this.tags2),
  ];

  
  constructor() { }

  getNotes(): Note[] {
    return this.notes;
  }

  getNoteById(NoteId: number): Note {
    let targetNote: Note = new Note(-1,'NaN','NaN',[]);
    this.notes.forEach(element => {
      if (element.id===NoteId) {
        targetNote = element;
      }
    });
    return targetNote;
  }
}
