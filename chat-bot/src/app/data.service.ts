import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject("");
    sessionId = this.messageSource.asObservable();
    constructor(private http: HttpClient) { }

    setSessionId(message: any) {
        this.messageSource.next(message);
    }

}