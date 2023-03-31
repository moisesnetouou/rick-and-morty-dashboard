import { User } from 'phosphor-react';
import {
  AvatarContainer,
  CharacterContainer,
  AvatarImage,
  AvatarFallback,
  Profile,
  ListEpisodes,
  Episode,
} from './styles';

export default function Character() {
  return (
    <CharacterContainer>
      <Profile>
        <AvatarContainer>
          <AvatarImage src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />

          <AvatarFallback delayMs={600}>
            <User />
          </AvatarFallback>
        </AvatarContainer>

        <div>
          <h1>Rick</h1>

          <h2>
            Status: <span>Vivo</span>
          </h2>

          <h2>
            Species: <span>Human</span>
          </h2>

          <h2>
            Origin: <span>Earth (C-137)</span>
          </h2>

          <h2>
            Location: <span>Citadel of Ricks</span>
          </h2>
        </div>
      </Profile>

      <ListEpisodes>
        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>

        <Episode>
          <span>Name: Pilot</span>
          <span>Episode: S01E01</span>
          <span>Air Date: December 2, 2013</span>
        </Episode>
      </ListEpisodes>
    </CharacterContainer>
  );
}
