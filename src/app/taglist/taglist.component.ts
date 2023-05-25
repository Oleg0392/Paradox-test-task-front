import { Component } from '@angular/core';
import { TagService } from '../services/tag.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css']
})
export class TaglistComponent {
  AllTags: Tag[];
  newTagTitle: string = '';

  constructor(private service: TagService) {
    this.service.getData();
    this.AllTags = this.service.getTags();
  }

  createTag(): void {
    if (this.newTagTitle=='') {
      return;
    }
    console.log(this.newTagTitle);
    this.service.tags.push(new Tag(this.AllTags.length,this.newTagTitle));
    this.AllTags = this.service.getTags();
    this.service.sendData(this.AllTags.length-1,true);
    this.newTagTitle = '';
  }

  deleteTag(tagId: number): void {
    this.service.sendData(tagId,false);
    this.AllTags = [];
    this.service.tags.forEach(t => {
      if (t.tagID != tagId) {
        this.AllTags.push(t);
      }
    })
  }
}
