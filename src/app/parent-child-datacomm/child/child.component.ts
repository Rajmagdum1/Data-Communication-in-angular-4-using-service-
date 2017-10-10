import { Component, OnDestroy } from '@angular/core';

//import { Subscription } from 'rxjs/Subscription';
import { Subscription } from 'rxjs/Subscription'
import { MessageService } from '../data-service/data.service';

@Component({
    selector: 'child',
    templateUrl: './child.component.html'
})
export class ChildComponent implements OnDestroy {
    message: any;
    subscription: Subscription;

    constructor(private messageService: MessageService) {
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(
            message => { this.message = message; });
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
       
        this.subscription.unsubscribe();
    }
}
