import styled from 'styled-components';

export const DashboardContainer = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const DashboardContent = styled.div``;

export const GridInfoCardContainer = styled.div`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  grid-template-areas:
    'characters alive dead'
    'episodes locations favorites';

  column-gap: 5rem;
  row-gap: 5rem;

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

  @media (max-width: 88.75em) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    grid-template-areas:
      'characters alive'
      'dead episodes'
      'locations favorites';
  }

  @media (max-width: 37.5em) {
    margin: 2rem 0;

    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    grid-template-areas:
      'characters'
      'alive'
      'dead'
      'episodes'
      'locations'
      'favorites';

    column-gap: 0;
    row-gap: 2rem;
  }
`;
