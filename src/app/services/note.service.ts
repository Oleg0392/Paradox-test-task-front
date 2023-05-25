import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Tag } from '../models/tag';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

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

  sendData(noteID: number, optype: number): void {
    const body = this.Notes[noteID];
    var postfix
    switch (optype){
      case 1:postfix = '/add/note';
      break;
      case 2:postfix = '/upd/note';
      break;
      case 3:postfix = '/del/note';
      break;
      default: break;
    }  
    console.log('note to send:',body);
    
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
