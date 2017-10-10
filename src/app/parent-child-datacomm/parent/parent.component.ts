import { Component, OnInit } from '@angular/core';

import { MessageService } from '../data-service/data.service';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

    constructor(private messageService: MessageService) { }

    sendMessage(): void {
        
        // send message to subscribers via observable subject
        this.messageService.sendMessage('Message from parent Component to child Component!');
    }

    ngOnInit() {
    }
    clearMessage(): void {
        // clear message
        this.messageService.clearMessage();
    }

}
