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
    episodes {
      info {
        count
      }
    }
  }
`;

export const GET_CHARACTERS_BY_STATUS_QUERY = `
  query GetCharactersByStatusQuery($status: String){
    characters(filter: { status: $status }) {
      info {
        count
      }
    }
  }
`;
