export interface DashboardProps {
  general: {
    alive: 'string';
    dead: 'string';
    totalCharacters: 'string';
    totalEpisodes: 'string';
    totalLocations: 'string';
    unknown: 'string';
  };
}

export interface StatsQueryProps {
  totalCharacters: string;
  alive: string;
  dead: string;
  unknown: string;
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

export interface CharactersParams {
  characters: {
    info: {
      count: string;
    };
  };
}
