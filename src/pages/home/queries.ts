import { gql } from 'graphql-request';

export const GET_STATS_QUERY = gql`
  query GetStatsQuery {
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

export const GET_CHARACTERS_BY_STATUS_QUERY = gql`
  query GetCharactersByStatusQuery($status: String) {
    characters(filter: { status: $status }) {
      info {
        count
      }
    }
  }
`;
