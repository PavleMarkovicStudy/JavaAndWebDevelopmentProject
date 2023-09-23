import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // needed for the confirmation and message functionality
  providers: [ConfirmationService, MessageService],
})
export class HeaderComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private globalService: GlobalService
  ) {}

  // This makes a pop up for confirming that the user wants to remove all cards
  // if the user clicks on accept, then the removeAllCards function deletes all
  confirmRemove() {
    this.confirmationService.confirm({
      message: 'Do you want to remove all active cards?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.removeAllCards();
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'All Cards Removed' });
      },
    });
  }

  // function that handles removing cards from
  // both globalService and Local storage
  removeAllCards() {
    this.globalService.deleteAllLocations();
    localStorage.removeItem('geoLocations');
  }
}
