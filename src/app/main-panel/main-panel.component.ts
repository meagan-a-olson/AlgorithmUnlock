import { Component, OnInit } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeService } from '../upgrade-service';
import { Hardware } from '../hardware';
import { HardwareService } from '../hardware.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];
  availableHardware: Hardware[] = [];

  constructor(public upgradeService: UpgradeService, public hardwareService: HardwareService) { }



  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
    this.availableHardware = this.hardwareService.availableHardware;
  }



}
