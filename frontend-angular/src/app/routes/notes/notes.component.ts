import { Component, inject } from '@angular/core';
import { NotesStateService } from '../../data-access/notes-state.service';
import { NotesService } from '../../data-access/notes.service';


@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
  providers: [NotesStateService]

})
export class NotesComponent {
  noteState = inject(NotesStateService)

}
