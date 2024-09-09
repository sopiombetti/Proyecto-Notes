import { Routes } from '@angular/router';
import { NotesComponent } from './routes/notes/notes.component';
import { ArchivedNotesComponent } from './routes/archived-notes/archived-notes.component';
import { NewNoteComponent } from './routes/new-note/new-note.component';

export const routes: Routes = [
    {
        path: "",
        component: NotesComponent

    },
    {
        path: "archived",
        component: ArchivedNotesComponent

    },
    {
        path: "newnote",
        component: NewNoteComponent

    }
];
