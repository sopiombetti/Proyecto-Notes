import { inject, Injectable } from "@angular/core";
import { Note } from "./note.interface";
import { signalSlice } from 'ngxtension/signal-slice'
import { NotesService } from "./notes.service";
import { map } from "rxjs";

interface State {
    notes: Note[]
}

@Injectable()
export class NotesStateService {
    private notesService = inject(NotesService)

    private initialState: State = {
        notes: []
    }

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.notesService.getNotes().pipe(map((notes) => ({notes})))
        ]
    })
}