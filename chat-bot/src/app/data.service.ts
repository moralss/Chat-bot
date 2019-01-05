import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private sessionIdSource = new BehaviorSubject("");
    private oldMessageSource = new BehaviorSubject([]);
    private messageToAgent = new BehaviorSubject([]);

    sessionId = this.sessionIdSource.asObservable();
    userBotMessages = this.oldMessageSource.asObservable()
    userAgentMessages = this.messageToAgent.asObservable()
    constructor() { }

    setSessionId(sessionId: any) {
        this.sessionIdSource.next(sessionId);
    }
    setUserBotMessages(messages: any) {
        this.oldMessageSource.next(messages)
    }
    setUserAgentMessages(messages: any) {
        this.messageToAgent.next(messages)
    }
}