import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { InfoCard } from './InfoCard';
import { GET_CHARACTERS_BY_STATUS_QUERY, GET_STATS_QUERY } from './queries';
import { GridInfoCardContainer } from './styles';
import { CharactersParams, StatsParams, StatsQueryProps } from './types';

export function GridInfoCard() {
  const { data, isLoading } = useQuery<StatsQueryProps>({
    queryKey: ['stats'],
    queryFn: async () => {
      const stats = await request<StatsParams>(
        'https://rickandmortyapi.com/graphql',
        GET_STATS_QUERY,
      );

      const alive = await request<CharactersParams>(
        'https://rickandmortyapi.com/graphql',
        GET_CHARACTERS_BY_STATUS_QUERY,
        {
          status: 'alive',
        },
      );

      const dead = await request<CharactersParams>(
        'https://rickandmortyapi.com/graphql',
        GET_CHARACTERS_BY_STATUS_QUERY,
        {
          status: 'dead',
        },
      );

      const unknown = await request<CharactersParams>(
        'https://rickandmortyapi.com/graphql',
        GET_CHARACTERS_BY_STATUS_QUERY,
        {
          status: 'unknown',
        },
      );

      return {
        totalCharacters: stats.characters.info.count,
        totalLocations: stats.locations.info.count,
        totalEpisodes: stats.episodes.info.count,
        alive: alive.characters.info.count,
        dead: dead.characters.info.count,
        unknown: unknown.characters.info.count,
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
      <InfoCard
        grid="alive"
        text="Personagens vivos/mortos"
        value={data?.alive}
        subValue={data?.dead}
      />
      <InfoCard
        grid="dead"
        text="Personagens com status desconhecido"
        value={data?.unknown}
      />

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
