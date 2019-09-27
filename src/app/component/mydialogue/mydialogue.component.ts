import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NoteDetails } from "../../model/note-details"
@Component({
  selector: 'app-mydialogue',
  templateUrl: './mydialogue.component.html',
  styleUrls: ['./mydialogue.component.scss']
})
export class MydialogueComponent implements OnInit {
  newnote: NoteDetails;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.newnote.title = '';
    this.newnote.note = '';
    this.newnote.reminder = '';
    this.newnote.color = '';
    this.newnote.image = '';
    this.newnote.collaborator = '';
  }

}
