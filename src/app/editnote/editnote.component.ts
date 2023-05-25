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
  selected: string = '';

  constructor(private route: ActivatedRoute, private service: NoteService, private router: Router, private tagService: TagService) {
    this.tagService.getData();
    this.SelectTags = this.tagService.getTags();

    this.noteId = Number(this.route.snapshot.paramMap.get('id'));
    this.note = this.service.getNoteById(this.noteId);
    
    var tagStr = this.note.tags.split(';');
    console.log(this.note.tags);
    console.log(tagStr);

    if (tagStr.length > 0) {
      console.log(tagStr.length);
      if (tagStr[0] != '') {
        console.log(tagStr[0]);
        tagStr.forEach(tagId => {
          for (let i = 0; i < this.SelectTags.length; i++) {
            if (Number(tagId)==this.SelectTags[i].tagID) {
              this.CurrentNoteTags.push(this.SelectTags[i]);
              console.log(tagId);
            }
          }
        });
      }      
    }
    console.log(this.note);    
  }

  ngOnInit() {
    //this.contactForm = this.fb.group({tags: [null]});
  }

  updateNote(noteId: number): void {
    this.service.getNoteById(noteId).raw = this.note.raw;
    this.service.getNoteById(noteId).tags = this.note.tags;
    this.service.sendData(noteId,2);
    this.router.navigate(['/notelist']);
  }

  deleteNote(noteId: number): void {
    this.service.sendData(noteId,3);
  }

  addNewTag(): void {
    if (this.selected != '') {

      this.CurrentNoteTags.forEach(ct =>{
        if (ct.title == this.selected) {
          return;
        }
      });

      this.SelectTags.forEach(st => {
        if (st.title.trim() == this.selected.trim()) {
          var insVlaue = this.note.tags == '' ? st.tagID.toString() : ';' + st.tagID.toString();
          this.note.tags += insVlaue;
          console.log(this.note);
        }
      });
    }
  }

  deleteTag(): void{
    if (this.selected != '') {
      console.log(this.selected);
      this.CurrentNoteTags.forEach(ct => {
        if (ct.title.trim() == this.selected.trim()) {
          console.log(ct);
          var delValue
          if (this.note.tags.indexOf(ct.tagID.toString()) == 0){
              delValue = ct.tagID.toString() + ';';
          }
          else delValue = ';' + ct.tagID.toString();
          console.log(delValue);
          this.note.tags = this.note.tags.replace(delValue,'');         
        }
      });
      console.log(this.note);
    }
  }
}
