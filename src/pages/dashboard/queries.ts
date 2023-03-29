export const GET_STATS_QUERY = `
  query GetStatsQuery{
    characters {
      info {
        count
      }
    }
    locations {
      info {
        count
      }
    }
  }
`;

export const GET_ALIVE_QUERY = `
  query GetAliveQuery{
    characters(filter: { status: "alive" }) {
      info {
        count
      }
    }
  }
`;

export const GET_DEAD_QUERY = `
  query GetDeadQuery{
    characters(filter: { status: "dead" }) {
      info {
        count
      }
    }
  }
`;
