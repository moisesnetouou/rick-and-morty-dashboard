import { InfoCard } from '@/components/InfoCard';
import { gql, useQuery } from '@apollo/client';

const GET_STATS_QUERY = gql`
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
  }
`;

const GET_ALIVE_QUERY = gql`
  query {
    characters(filter: { status: "alive" }) {
      info {
        count
      }
    }
  }
`;

const GET_DEAD_QUERY = gql`
  query {
    characters(filter: { status: "dead" }) {
      info {
        count
      }
    }
  }
`;

export function GridInfoCards() {
  const { data: stats, loading: isLoadingStats } = useQuery(GET_STATS_QUERY);
  const { data: alive } = useQuery(GET_ALIVE_QUERY);
  const { data: dead } = useQuery(GET_DEAD_QUERY);

  if (isLoadingStats) return <></>;

  return (
    <>
      <InfoCard text="Personagens" value={stats.characters.info.count} />
      <InfoCard text="Personagens vivos" value={alive.characters.info.count} />
      <InfoCard text="Personagens mortos" value={dead.characters.info.count} />
    </>
  );
}
