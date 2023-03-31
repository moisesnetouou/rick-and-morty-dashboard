import { useFavoriteStore } from '@/store/useFavoriteStore';
import { useMutation, useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import { User } from 'phosphor-react';
import { HiHeart } from 'react-icons/hi';
import { RiShareBoxFill } from 'react-icons/ri';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import { queryClient } from '@/services/queryClient';
import {
  AvatarContainer,
  CharactersList,
  AvatarFallback,
  AvatarImage,
  CharactersContainer,
  Status,
  CharactersStack,
  CharacterCard,
  Filter,
} from './styles';

export const GET_CHARACTERS_QUERY = gql`
  query GetCharactersQuery($status: String, $name: String) {
    characters(page: 1, filter: { status: $status, name: $name }) {
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
  const { addFavorites } = useFavoriteStore((state) => state);
  const [filterBy, setFilterBy] = useState('');
  const [filterName, setFilterName] = useState('');

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const { characters } = await request<any>(
        'https://rickandmortyapi.com/graphql',
        GET_CHARACTERS_QUERY,
        {
          status: filterBy,
          name: filterName,
        },
      );

      return {
        info: characters.info,
        results: characters.results,
      };
    },
  });

  const changeStatus = useMutation({
    mutationFn: async (status: string) => {
      setFilterBy(status);

      return status;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['characters'],
        exact: true,
      });

      refetch();
    },
  });

  const changeName = useMutation({
    mutationFn: async (name: string) => {
      setFilterName(name);

      return name;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['characters'],
        exact: true,
      });

      refetch();
    },
  });

  async function handleFilterBy(status: string) {
    changeStatus.mutateAsync(status);
  }

  async function onSubHandleEnter(event: KeyboardEvent<HTMLInputElement>) {
    const eventValue = event as unknown as ChangeEvent<HTMLInputElement>;

    if (event.key === 'Enter') {
      changeName.mutateAsync(eventValue.target.value);
    }
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <CharactersContainer>
      <h1>Characters</h1>

      <Filter>
        <div>
          <button
            className={filterBy === '' ? 'isActive' : ''}
            type="button"
            onClick={() => handleFilterBy('')}
          >
            All
          </button>
          <button
            className={filterBy === 'alive' ? 'isActive' : ''}
            type="button"
            onClick={() => handleFilterBy('alive')}
          >
            Alive
          </button>
          <button
            className={filterBy === 'dead' ? 'isActive' : ''}
            type="button"
            onClick={() => handleFilterBy('dead')}
          >
            Dead
          </button>
          <button
            className={filterBy === 'unknown' ? 'isActive' : ''}
            type="button"
            onClick={() => handleFilterBy('unknown')}
          >
            Unknown
          </button>
        </div>

        <label htmlFor="name">
          <BsSearch />

          <input
            type="search"
            id="name"
            // onChange={(e) => submitName(e.target.value)}
            onChange={(e) => setFilterName(e.target.value)}
            onKeyDown={(event) => onSubHandleEnter(event)}
          />
        </label>
      </Filter>

      {isRefetching ? (
        <>ola</>
      ) : (
        <>
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
                          <Status statusColor="green">
                            {character.status}
                          </Status>
                        )}

                        {character.status === 'Dead' && (
                          <Status statusColor="red">{character.status}</Status>
                        )}

                        {character.status === 'unknown' && (
                          <Status statusColor="yellow">
                            {character.status}
                          </Status>
                        )}
                      </td>
                      <td>{character.species}</td>
                      <td>
                        <div className="actions-td-button">
                          <button
                            type="button"
                            onClick={() => addFavorites(character.id)}
                          >
                            <HiHeart size={32} />
                          </button>

                          <Link href="/">
                            <RiShareBoxFill size={26} />
                          </Link>
                        </div>
                      </td>
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

                    <h2>
                      Status: <span>{character.status}</span>
                    </h2>
                    <h2>
                      Species: <span>{character.species}</span>
                    </h2>
                  </div>

                  <div className="action-buttons">
                    <button
                      type="button"
                      onClick={() => addFavorites(character.id)}
                    >
                      <HiHeart size={32} />
                    </button>

                    <Link href="/">
                      <RiShareBoxFill size={26} />
                    </Link>
                  </div>
                </CharacterCard>
              );
            })}
          </CharactersStack>
        </>
      )}
    </CharactersContainer>
  );
}
