import { Component, OnInit } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeServiceService } from '../upgrade-service.service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];

  constructor(public upgradeService: UpgradeServiceService) { }



  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
  }



}
