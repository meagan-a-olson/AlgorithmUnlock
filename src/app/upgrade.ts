export interface Upgrade {
    name: string;
    description: string;
    price: number;
    multiplier: number;
    upgradeType: number; // 1 = Click upgrade, 2 = Hardware upgrade, 3 = Direct bitcoin multiplier upgrade
}
