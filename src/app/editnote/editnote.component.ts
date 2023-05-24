import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note'
import { NoteService } from '../services/note.service';
import { TagService } from '../services/tag.service';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {

  note: Note;
  noteId: number = NaN;
  created: string = '';
  selected: string = '';
  tagList: Tag[] = [];
  showTags: boolean = false;
  SelectTags: Tag[];
  showNewTagInput: boolean = false;

  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router, private tagService: TagService) {
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.service.getNoteById(this.noteId);
    var tagStr = this.note.tags.split(';');
    if (tagService.tags != undefined) {
      tagStr.forEach(tagId => {
        for (let i = 0; i < tagService.tags.length; i++) {
          if (Number(tagId)===tagService.tags[i].tagID) {
            this.tagList.push(tagService.tags[i]);
            this.showTags = true;
          }
        }
      });
    }    
    this.SelectTags = this.tagService.tags;
    this.SelectTags.push(new Tag(999,'Создать новый...'));
  }

  updateNote(): void {
    this.service.getNoteById(this.noteId).raw = this.note.raw;
    this.router.navigate(['/notelist']);
    this.service.sendData(this.noteId);
  }

  addNewTag(): void {
    this.showNewTagInput = false;
    if (this.created.length > 0 && this.selected === 'Создать новый...') {
      this.tagService.tags.push(new Tag(this.tagService.tags.length,this.created));
      this.note.tags += this.tagService.tags.length.toString() + ';';
    }
    else {
      this.tagService.tags.forEach(t => {
        if (t.title===this.selected){
          if (this.note.tags.includes(t.tagID.toString() + ';')){
            this.note.tags += t.tagID.toString() + ';';
          }
        }
      });
    }
  }

  showNewTagField(tagId: number): void{
    if (tagId===999) this.showNewTagInput = true;
  }
}
