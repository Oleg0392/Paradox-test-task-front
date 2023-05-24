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

  constructor(private service: TagService) {
    this.service.getData();
    this.AllTags = this.service.getTags();
  }
}
