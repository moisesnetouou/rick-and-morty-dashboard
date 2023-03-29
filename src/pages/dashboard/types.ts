export interface StatsQueryProps {
  totalCharacters: string;
  alive: string;
  dead: string;
}

export interface StatsParams {
  characters: {
    info: {
      count: string;
    };
  };
}

export interface AliveParams {
  characters: {
    info: {
      count: string;
    };
  };
}

export interface DeadParams {
  characters: {
    info: {
      count: string;
    };
  };
}
