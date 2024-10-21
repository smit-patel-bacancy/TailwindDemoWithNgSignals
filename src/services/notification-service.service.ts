import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  public notificationMessage: string = '';
  public isNotificationShow: boolean = false;

  constructor() { }

  public showNotification(notificationText: string): void {
    this.notificationMessage = notificationText;
    this.isNotificationShow = true;
  }

  public closeNotification(): void {
    this.notificationMessage = '';
    this.isNotificationShow = false;
  }

}