import { Component, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../models/note'
import { NoteService } from '../services/note.service';
import { TagService } from '../services/tag.service';
import { Tag } from '../models/tag';
//import { FormBuilder, FormGroup, NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {

  note: Note;
  noteId: number = NaN;
  CurrentNoteTags: Tag[] = [];
  SelectTags: Tag[];
  //contactForm: FormGroup | undefined;
  newTag: string = '';

  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router, private tagService: TagService) {
    this.tagService.getData();
    this.SelectTags = this.tagService.getTags();

    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.service.getNoteById(this.noteId);
    
    var tagStr = this.note.tags.split(';');
    console.log(this.note.tags);
    console.log(tagStr[0],tagStr[1],tagStr[2]);

    if (this.SelectTags != undefined) {
      tagStr.forEach(tagId => {
        for (let i = 0; i < this.SelectTags.length; i++) {
          if (Number(tagId)===this.SelectTags[i].tagID) {
            this.CurrentNoteTags.push(this.SelectTags[i]);
            console.log(tagId);
          }
        }
      });
    }    
  }

  ngOnInit() {
    //this.contactForm = this.fb.group({tags: [null]});
  }

  updateNote(): void {
    this.service.getNoteById(this.noteId).raw = this.note.raw;
    this.router.navigate(['/notelist']);
    this.service.sendData(this.noteId,false);
  }

  addNewTag(): void {
    /*if (Number(this.contactForm?.value === -1)){
      console.log('=== -1');
      if (this.newTag != '') {
        this.note.tags += this.newTag + ';';
        console.log('взял из new Tag');
        return;
      }
    }
    this.CurrentNoteTags.forEach(ct => {
      if (Number(this.contactForm?.value)===ct.tagID) {
        return;
      }
    });
    this.note.tags += this.contactForm?.value.toString() + ';';
    console.log('взял из cocntact form');*/
  }
}
