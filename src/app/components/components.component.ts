import { Component, OnInit, Input } from '@angular/core';
import { Component_Computer } from '../component';
import { ComponentService } from '../component.service';
import { UpgradeService } from '../upgrade-service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  @Input() component: Component_Computer;
  
  constructor(public upgradeService: UpgradeService, public componentService: ComponentService) { }

  ngOnInit(): void {
  }

  onPurchase() {
    if (this.upgradeService.currentNumOfBitcoins >= this.component.price) 
    {
      this.upgradeService.currentBitcoinMultiplier += this.component.defaultProduction;
      this.upgradeService.currentNumOfBitcoins -= this.component.price;
      this.componentService.increasePrice(this.component.name);
    }
    
  }
}
