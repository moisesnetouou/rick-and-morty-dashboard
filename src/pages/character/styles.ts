import styled from 'styled-components';
import * as Avatar from '@radix-ui/react-avatar';

export const CharacterContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 2rem;

  overflow: scroll;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 37.55em) {
    flex-direction: column;
  }
`;

export const Profile = styled.div`
  background: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30rem;

  div {
    h1 {
      font-weight: 500;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 400;

      span {
        font-weight: 300;
      }
    }
  }

  @media (max-width: 37.55em) {
    div {
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: 50%;
  display: inline-block;
  width: 14rem;
  height: 14rem;
  overflow: hidden;

  @media (max-width: 37.55em) {
    width: 10rem;
    height: 10rem;
  }
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 14rem;
  height: 14rem;
  object-fit: 'cover';
  border-radius: 'inherit';

  @media (max-width: 37.55em) {
    width: 10rem;
    height: 10rem;
  }
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: '100%';
  height: '100%';
  display: 'flex';
  justify-content: 'center';
  background-color: '$gray600';
  color: '$gray800';

  svg: {
    width: 14rem;
    height: 14rem;
  }

  @media (max-width: 37.55em) {
    svg: {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const ListEpisodes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;

  overflow: scroll;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Episode = styled.div`
  background: ${(props) => props.theme['gray-600']};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 56.25em) {
    width: 100%;
  }
`;
