import { GetServerSideProps } from 'next';
import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiLifeBar } from 'react-icons/gi';
import { VscWorkspaceUnknown } from 'react-icons/vsc';
import { SlScreenDesktop } from 'react-icons/sl';
import { GoLocation } from 'react-icons/go';
import { AiFillLock } from 'react-icons/ai';

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
import {
  CharactersParams,
  DashboardProps,
  StatsParams,
  StatsQueryProps,
} from './home/types';

export default function Dashboard({ general }: DashboardProps) {
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
        >
          <BsFillPeopleFill size={32} />
        </InfoCard>
        <InfoCard
          grid="alive"
          text="Personagens vivos/mortos"
          value={data?.alive}
          subValue={data?.dead}
        >
          <GiLifeBar size={32} />
        </InfoCard>

        <InfoCard
          grid="dead"
          text="Personagens com status desconhecido"
          value={data?.unknown}
        >
          <VscWorkspaceUnknown size={32} />
        </InfoCard>

        <InfoCard grid="episodes" text="Episódios" value={data?.totalEpisodes}>
          <SlScreenDesktop size={32} />
        </InfoCard>
        <InfoCard
          grid="locations"
          text="Localizações"
          value={data?.totalLocations}
        >
          <GoLocation size={32} />
        </InfoCard>

        <InfoCard grid="favorites" text="Lock" value="-">
          <AiFillLock size={32} />
        </InfoCard>
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
