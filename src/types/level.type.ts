export interface TapLevel {
    grade: number;
    tokensPerClick: number;
    levelUpgradeCost: number;
}

export interface MaxEnergyLevel {
    grade: number;
    maxEnergy: number;
    levelUpgradeCost: number;
}

export interface Level {
    grade: number;
    value: number | string;
    levelUpgradeCost: number;
}

export interface AutoBotLevel {
    grade: number;
    tokensPerHour: number;
    levelUpgradeCost: number;
}