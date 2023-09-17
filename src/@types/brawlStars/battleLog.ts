interface ITeams {
  tag: string;
  name: string;
  brawler: {
    id: number
    name: string;
    power: number
    trophies: number
  }
}

export interface IBattleLog {
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
      ITeams[]
    ];
  }
}