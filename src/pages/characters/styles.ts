import * as Avatar from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const CharactersContainer = styled.div`
  width: 100%;
  height: 100%;

  overflow: scroll;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CharactersList = styled.div`
  flex: 1;
  overflow: auto;
  padding: 2rem 0;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      align-items: center;
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      &:first-child {
        width: 30%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

export const AvatarContainer = styled(Avatar.Root)`
  border-radius: 50%;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  overflow: hidden;
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 3rem;
  height: 3rem;
  object-fit: 'cover';
  border-radius: 'inherit';
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: '100%';
  height: '100%';
  display: 'flex';
  justify-content: 'center';
  background-color: '$gray600';
  color: '$gray800';

  svg: {
    width: 3rem;
    height: 3rem;
  }
`;

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
