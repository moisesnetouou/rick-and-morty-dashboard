import styled from 'styled-components';

export const DashboardContainer = styled.main`
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

export const GridInfoCardContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'characters alive dead'
    'test1 test2 teste3'
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
