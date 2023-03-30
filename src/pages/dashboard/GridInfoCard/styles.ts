import styled from 'styled-components';

export const GridInfoCardContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'characters alive dead'
    'episodes locations favorites'
    '. . .';

  .characters {
    grid-area: characters;
  }

  .alive {
    grid-area: alive;
  }

  .dead {
    grid-area: dead;
  }

  .episodes {
    grid-area: episodes;
  }

  .locations {
    grid-area: locations;
  }

  .favorites {
    grid-area: favorites;
  }
`;
