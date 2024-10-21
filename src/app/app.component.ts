import { Component } from '@angular/core';
import { NotificationServiceService } from 'src/services/notification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TailwindDemoWithNgSignals';

  constructor(public notificationService: NotificationServiceService) {

  }
}
