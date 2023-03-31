import { HiUser } from 'react-icons/hi';
import request, { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import {
  AvatarContainer,
  CharacterContainer,
  AvatarImage,
  AvatarFallback,
  Profile,
  ListEpisodes,
  Episode,
} from './styles';

const CHARACTER_QUERY = gql`
  query GetCharacterQuery($id: ID!) {
    character(id: $id) {
      name
      status
      species
      gender
      created
      image
      location {
        name
      }
      origin {
        name
      }
      episode {
        name
        air_date
      }
    }
  }
`;

export default function Character() {
  const { query } = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const teste = Number(query.id);

      const { character } = await request(
        'https://rickandmortyapi.com/graphql',
        CHARACTER_QUERY,
        {
          id: teste,
        },
      );

      return character;
    },
  });

  if (isLoading) {
    return <></>;
  }
  console.log(isLoading);
  console.log(data);

  return (
    <CharacterContainer>
      <Profile>
        <AvatarContainer>
          <AvatarImage src={data.image} />

          <AvatarFallback delayMs={600}>
            <HiUser />
          </AvatarFallback>
        </AvatarContainer>

        <div>
          <h1>{data.name}</h1>

          <h2>
            Status: <span>{data.status}</span>
          </h2>

          <h2>
            Species: <span>{data.species}</span>
          </h2>

          <h2>
            Origin: <span>{data.origin.name}</span>
          </h2>

          <h2>
            Location: <span>{data.location.name}</span>
          </h2>
        </div>
      </Profile>

      <ListEpisodes>
        {data.episode.map((episodes) => {
          return (
            <Episode key={episodes.episode}>
              <span>Name: {episodes.name}</span>
              <span>Episode: {episodes.episode}</span>
              <span>Air Date: {episodes.air_date}</span>
            </Episode>
          );
        })}
      </ListEpisodes>
    </CharacterContainer>
  );
}
