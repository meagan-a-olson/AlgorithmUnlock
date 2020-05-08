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
  messageToDisplay: string;

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];
  availableHardware: Hardware[] = [];

  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
    this.availableHardware = this.hardwareService.availableHardware;
    setInterval(() => {
      if (this.availableUpgrades.length == 0 && this.upgradeService.gameWon == false)
      {
        this.messageToDisplay = "All available upgrades purchased!";
      }
      else if (this.upgradeService.gameWon == true)
      {
        // Message based on infamous ghostbusters game completion message  (purposely spelt wrong).
        this.messageToDisplay = "Conglaturation!!! You have completed a great game. And prooved the justice of our culture. Now go home and rest our heroes!"
      }
      else 
      {
        this.messageToDisplay = '';
      }
    }, 500);
  }
}
