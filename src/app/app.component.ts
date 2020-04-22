import { Component } from '@angular/core';
import { UpgradeService } from './upgrade-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpgradeService]
})
export class AppComponent {
  title = 'AlgorithmUnlock';

  constructor(public upgradeService: UpgradeService) { }
}
