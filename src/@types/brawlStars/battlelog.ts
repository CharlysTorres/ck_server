interface Teams {
  tag: string;
  name: string;
  brawler: {
    id: number
    name: string;
    power: number
    trophies: number
  }
}

interface Items {
  battleTime: string;
  event: {
    id: number;
    mode: string;
    map: string;
  };
  battle: {
    mode: string;
    type: string;
    result: string;
    duration: number;
    trophyChange: number;
    starPlayer: {
      tag: string;
      name: string;
      brawler: {
        id: number;
        name: string;
        power: number;
        trophies: number;
      };
    },
    teams: [
      Teams[]
    ];
  }
}

export interface IBattleLog {
  items: Items[];
}