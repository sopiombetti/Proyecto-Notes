import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Note } from "./note.interface";

@Injectable({
    providedIn: 'root'
})
export class NotesService{
    private http = inject(HttpClient)

    getNotes():Observable<Note[]> {
        return this.http.get<any[]>('http://localhost:3000/api/notes')
        
    }
}