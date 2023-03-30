import { useQuery } from '@tanstack/react-query';
import request from 'graphql-request';
import { User } from 'phosphor-react';
import {
  AvatarContainer,
  CharactersList,
  AvatarFallback,
  AvatarImage,
  CharactersContainer,
} from './styles';

export const GET_CHARACTERS_QUERY = `
  query GetCharactersQuery{
    characters(page: 1) {
      info {
        count
        prev
        next
        pages
        
      }
      results{
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
                    <AvatarContainer>
                      <AvatarImage src={character.image} />

                      <AvatarFallback delayMs={600}>
                        <User />
                      </AvatarFallback>
                    </AvatarContainer>

                    <span>{character.name}</span>
                  </td>
                  <td>{character.status}</td>
                  <td>{character.species}</td>
                  <td />
                </tr>
              );
            })}
          </tbody>
        </table>
      </CharactersList>
    </CharactersContainer>
  );
}