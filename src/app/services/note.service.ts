import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';

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

  hostUrl: string = 'https://localhost:44318/api';
  response: any;
  Notes: Note[];

  constructor(private client: HttpClient) { 
    this.client.get(this.hostUrl + '/get/note')
    .subscribe({
      next: r => {
        this.response = r;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('load notes complete.');
        console.log('response',this.response);
      }      
    });

    this.Notes = (this.response as Note[]);
  }

  getNotes(): Note[] {
    this.getData();
    return this.Notes;
  }

  getNoteById(NoteId: number): Note {
    var targetNote: Note = new Note(-1,'NaN','NaN');
    this.Notes.forEach(element => {
      if (element.noteID===NoteId) {
        targetNote = element;
      }
    });
    return targetNote;
  }

  getData(): void {
    this.client.get(this.hostUrl + '/get/note')
    .subscribe({
      next: r => {
        this.response = r;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('load notes complete.');
        console.log('response',this.response);
      }      
    });

    this.Notes = (this.response as Note[]);
  }

  sendData(noteID: number, addnote: boolean): void {
    const body = this.Notes[noteID];
    var postfix = addnote ? '/add/note' : '/upd/note';
    console.log('strnotes:',body);
    
    this.client.post(this.hostUrl + postfix, body)
    .subscribe({
      next: r => {
        console.log(r)
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('notes upload complete.');
      }
    });
  }

}
