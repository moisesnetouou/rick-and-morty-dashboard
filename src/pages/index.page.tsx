import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { GetServerSideProps } from 'next';

import { InfoCard } from './home/InfoCard';
import {
  GET_CHARACTERS_BY_STATUS_QUERY,
  GET_STATS_QUERY,
} from './home/queries';
import {
  DashboardContainer,
  DashboardContent,
  GridInfoCardContainer,
} from './home/styles';
import { CharactersParams, StatsParams, StatsQueryProps } from './home/types';

export default function Dashboard({ general }: any) {
  const { data } = useQuery<StatsQueryProps>({
    queryKey: ['stats'],
    initialData: general,
  });

  return (
    <DashboardContainer>
      <DashboardContent>
        <h1>Dashboard</h1>

        <span>Acompanhe os dados atualizados desse vasto multiverso</span>
      </DashboardContent>

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

        <InfoCard
          grid="episodes"
          text="Episódios"
          value={data?.totalEpisodes}
        />
        <InfoCard
          grid="locations"
          text="Localizações"
          value={data?.totalLocations}
        />
        <InfoCard grid="favorites" text="Favoritos" value="0" />
      </GridInfoCardContainer>
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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

  const general = {
    totalCharacters: stats.characters.info.count,
    totalLocations: stats.locations.info.count,
    totalEpisodes: stats.episodes.info.count,
    alive: alive.characters.info.count,
    dead: dead.characters.info.count,
    unknown: unknown.characters.info.count,
  };

  return {
    props: {
      general,
    },
  };
};
