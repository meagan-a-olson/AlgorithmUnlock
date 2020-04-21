import { Component } from '@angular/core';
import { UpgradeServiceService } from './upgrade-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpgradeServiceService]
})
export class AppComponent {
  title = 'AlgorithmUnlock';

  constructor(public upgradeService: UpgradeServiceService) { }
}
