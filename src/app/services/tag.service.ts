import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[] = []
  response: any;
  hostUrl: string;

  constructor(private client: HttpClient) {
      this.hostUrl = 'https://localhost:44318/api';
      this.getData();
   }

   getTags(): Tag[] {
    return this.tags;
   }
   
   getData(): void {
      this.client.get(this.hostUrl + '/get/tag')
    .subscribe({
      next: r => {
        this.response = r;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('load tags complete.');
        console.log('response',this.response);
      }      
    });

    this.tags = (this.response as Tag[]);
   }

   sendData(tagId: number, addtag: boolean): void {
    console.log(this.tags[tagId]);
    console.log(tagId);
    var body = this.tags[tagId];
    var postfix = addtag ? '/add/tag' : '/del/tag';
    console.log('tags to send:',body);
    
    this.client.post(this.hostUrl + postfix, body)
    .subscribe({
      next: r => {
        console.log(r)
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('tags upload complete.');
      }
    });
  }

}
