import { Component } from '@angular/core';
import { NoteService, ApiService } from '../services/';

@Component({
  selector: 'notesB-container',
  providers: [NoteService, ApiService],
  styles: [`
  .bs-note {
    display: inline-block;
    text-align: center;
  }
  `],
  template: `
  <div class="notes">
    <div class="creator">
    <note-creator (createNote)="onCreateNote($event)"></note-creator>
    </div>
    <div class="notes">
        <note-card
            class="bs-note"
            [note]="note"
            *ngFor="let note of notes"
            (checked)="onNoteChecked($event)"
            >
        </note-card>
    </div>
</div>
  `
})

export class NotesB {
  notes = [];

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
    .subscribe(resp => this.notes = resp.data)
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
    .subscribe(note => this.notes.push(note));
  }

  onNoteChecked(note) {
      this.noteService.completeNote(note)
      .subscribe(note => {
        const i = this.notes.findIndex(localNote => localNote.id 
        === note.id);
        this.notes.splice(i, 1);
      })
    }  
}
