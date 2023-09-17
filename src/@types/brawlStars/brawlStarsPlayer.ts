interface IGadget {
  id: number;
  name: string;
}

interface IStarPower {
  id: number;
  name: string;
}

interface IGear {
  id: number;
  name: string;
  level: number;
}

interface IBrawler {
  id: number;
  name: string;
  power: number;
  rank: number;
  trophies: number;
  highestTrophies: number;
  gears: IGear[];
  starPowers: IStarPower[];
  gadgets: IGadget[];
}

export interface IPlayerBrawlStars {
  tag: string;
  name: string;
  nameColor: string;
  icon: {
    id: number;
  },
  trophies: number;
  highestTrophies: number;
  highestPowerPlayPoints: number;
  expLevel: number;
  expPoints: number;
  isQualifiedFromChampionshipChallenge: boolean;
  '3vs3Victories': number;
  soloVictories: number;
  duoVictories: number;
  bestRoboRumbleTime: number;
  bestTimeAsBigBrawler: number;
  club: {
    tag: string;
    name: string;
  };
  brawlers: IBrawler[];
}