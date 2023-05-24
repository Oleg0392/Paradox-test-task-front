import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tags: Tag[];
  response: any;
  hostUrl: string;

  constructor(private client: HttpClient) {
      this.hostUrl = 'https://localhost:44318/api/tag';
      this.client.get(this.hostUrl)
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
}
