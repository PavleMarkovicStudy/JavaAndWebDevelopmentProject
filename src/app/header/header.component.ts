import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { GlobalService } from '../global.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class HeaderComponent {
  @Input() refreshWeatherInputFunction: (() => void) | undefined;
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

  // this function will call weather again
  refreshWeather() {
    if (this.refreshWeatherInputFunction) {
      this.refreshWeatherInputFunction();
    }
  }

  // function that handles removing cards from
  // both globalService and Local storage
  removeAllCards() {
    this.globalService.deleteAllLocations();
    localStorage.removeItem('geoLocations');
  }
}
