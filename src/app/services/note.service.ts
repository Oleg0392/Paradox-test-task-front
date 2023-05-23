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

  /*notes: Note[] = [
    new Note(0,'note1','sdkddsfdsfdsf',this.tags1),
    new Note(1,'note2','sdkddsfdsfdsf',this.tags2),
    new Note(2,'note3','sdkddsfdsfdsf',this.tags3),
    new Note(3,'note4','sdkddsfdsfdsf',this.tags1),
    new Note(4,'note5','sdkddsfdsfdsf',this.tags2),
  ];*/

  hostUrl: string;
  response: any;
  Notes: Note[] = [];

  constructor(private client: HttpClient) { 
    this.getData();
    this.hostUrl = 'https://localhost:44318/api/note';
  }

  getNotes(): Note[] {
    this.getData();
    return this.Notes;
  }

  getNoteById(NoteId: number): Note {
    let targetNote: Note = new Note(-1,'NaN','NaN',[]);
    this.Notes.forEach(element => {
      if (element.noteID===NoteId) {
        targetNote = element;
      }
    });
    return targetNote;
  }

  getData(): void {
    this.client.get(this.hostUrl)
    .subscribe({
      next: r => {
        this.response = r;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('load data complete.');
        console.log('response',this.response);
      }      
    });

    this.Notes = (this.response as Note[]);
  }

  sendData(noteID: number): void {
    let body = JSON.stringify(this.Notes[noteID]);
    console.log('strnotes:',body);
    
    this.client.post(this.hostUrl, body)
    .subscribe({
      next: r => {
        console.log(r)
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('data upload complete.');
      }
    });
  }

}
