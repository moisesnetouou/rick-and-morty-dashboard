import { InfoCard } from '@/components/InfoCard';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GET_ALIVE_QUERY, GET_DEAD_QUERY, GET_STATS_QUERY } from './queries';
import { GridInfoCardContainer } from './styles';
import { AliveParams, DeadParams, StatsParams, StatsQueryProps } from './types';

export function GridInfoCard() {
  const { data, isLoading } = useQuery<StatsQueryProps>({
    queryKey: ['stats'],
    queryFn: async () => {
      const stats = await request<StatsParams>(
        'https://rickandmortyapi.com/graphql',
        GET_STATS_QUERY,
      );

      const alive = await request<AliveParams>(
        'https://rickandmortyapi.com/graphql',
        GET_ALIVE_QUERY,
      );

      const dead = await request<DeadParams>(
        'https://rickandmortyapi.com/graphql',
        GET_DEAD_QUERY,
      );

      return {
        totalCharacters: stats.characters.info.count,
        totalLocations: stats.locations.info.count,
        totalEpisodes: stats.episodes.info.count,
        alive: alive.characters.info.count,
        dead: dead.characters.info.count,
      };
    },
  });

  if (isLoading) {
    <></>;
  }

  return (
    <GridInfoCardContainer>
      <InfoCard
        grid="characters"
        text="Personagens"
        value={data?.totalCharacters}
      />
      <InfoCard grid="alive" text="Personagens vivos" value={data?.alive} />
      <InfoCard grid="dead" text="Personagens mortos" value={data?.dead} />

      <InfoCard grid="episodes" text="Episódios" value={data?.totalEpisodes} />
      <InfoCard
        grid="locations"
        text="Localizações"
        value={data?.totalLocations}
      />
      <InfoCard grid="favorites" text="Favoritos" value="0" />
    </GridInfoCardContainer>
  );
}
