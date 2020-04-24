import { Component, OnInit } from '@angular/core';
import { Upgrade } from '../upgrade';
import { UpgradeService } from '../upgrade-service';
import { ComponentService } from '../component.service';
import { Component_Computer } from '../component';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {

  // Upgrade properties
  availableUpgrades: Upgrade[] = [];
  availableComponents: Component_Computer[] = [];

  constructor(public upgradeService: UpgradeService, public componentService: ComponentService) { }



  ngOnInit(): void {
    this.availableUpgrades = this.upgradeService.availableUpgrades;
    this.availableComponents = this.componentService.availableComponents;
  }



}
