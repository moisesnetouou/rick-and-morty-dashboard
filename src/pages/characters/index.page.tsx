import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import { User } from 'phosphor-react';
import { HiHeart } from 'react-icons/hi';
import {
  AvatarContainer,
  CharactersList,
  AvatarFallback,
  AvatarImage,
  CharactersContainer,
  Status,
  CharactersStack,
  CharacterCard,
} from './styles';

export const GET_CHARACTERS_QUERY = gql`
  query GetCharactersQuery {
    characters(page: 1) {
      info {
        count
        prev
        next
        pages
      }
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export default function Characters() {
  const { data, isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const { characters } = await request<any>(
        'https://rickandmortyapi.com/graphql',
        GET_CHARACTERS_QUERY,
      );

      return {
        info: characters.info,
        results: characters.results,
      };
    },
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <CharactersContainer>
      <CharactersList>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {data?.results.map((character: any) => {
              return (
                <tr key={character.id}>
                  <td>
                    <div>
                      <AvatarContainer>
                        <AvatarImage src={character.image} />

                        <AvatarFallback delayMs={600}>
                          <User />
                        </AvatarFallback>
                      </AvatarContainer>

                      <span>{character.name}</span>
                    </div>
                  </td>
                  <td>
                    {character.status === 'Alive' && (
                      <Status statusColor="green">{character.status}</Status>
                    )}

                    {character.status === 'Dead' && (
                      <Status statusColor="red">{character.status}</Status>
                    )}

                    {character.status === 'unknown' && (
                      <Status statusColor="yellow">{character.status}</Status>
                    )}
                  </td>
                  <td>{character.species}</td>
                  <td />
                </tr>
              );
            })}
          </tbody>
        </table>
      </CharactersList>

      <CharactersStack>
        {data?.results.map((character: any) => {
          return (
            <CharacterCard key={character.id}>
              <div>
                <div>
                  <AvatarContainer>
                    <AvatarImage src={character.image} />

                    <AvatarFallback delayMs={600}>
                      <User />
                    </AvatarFallback>
                  </AvatarContainer>

                  <span>{character.name}</span>
                </div>

                <h2>Status: {character.status}</h2>
                <h2>Species: {character.species}</h2>
              </div>

              <div className="action-buttons">
                <button type="button">
                  <HiHeart size={32} />
                </button>

                <button type="button">
                  <HiHeart size={32} />
                </button>
              </div>
            </CharacterCard>
          );
        })}
      </CharactersStack>
    </CharactersContainer>
  );
}
