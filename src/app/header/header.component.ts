import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class HeaderComponent {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  confirmRemove() {
    this.confirmationService.confirm({
      message: 'Do you want to remove all active cards?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        // 
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'All Cards Removed' });
      },
    });
  }
}
