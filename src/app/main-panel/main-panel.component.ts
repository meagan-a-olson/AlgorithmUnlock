import { Component, OnInit } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeService } from '../upgrade-service';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];

  constructor(public upgradeService: UpgradeService) { }



  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
  }



}
