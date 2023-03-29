export interface StatsQueryProps {
  totalCharacters: string;
  alive: string;
  dead: string;
  totalLocations: string;
  totalEpisodes: string;
}

export interface StatsParams {
  characters: {
    info: {
      count: string;
    };
  };
  locations: {
    info: {
      count: string;
    };
  };
  episodes: {
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
