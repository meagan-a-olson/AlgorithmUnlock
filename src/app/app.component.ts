import { Component } from '@angular/core';
import { Upgrade } from './upgrade';
import { UpgradeService } from './upgrade-service';
import { Hardware } from './hardware';
import { HardwareService } from './hardware.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpgradeService]
})
export class AppComponent {
  title = 'AlgorithmUnlock';

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];
  availableHardware: Hardware[] = [];

  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
    this.availableHardware = this.hardwareService.availableHardware;
  }
}
