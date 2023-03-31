import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  max-width: 400px;
  margin: 7rem auto;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 56.25em) {
    max-width: 300px;
  }
  button {
    background: ${(props) => props.theme['yellow-400']};
    cursor: pointer;
    border: none;
    width: 2rem;
    height: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    color: ${(props) => props.theme['blue-800']};
    border-radius: 0.25rem;
  }
  .first-button {
    position: absolute;
    left: 0;
  }
  .last-button {
    position: absolute;
    right: 0;
  }
  span {
    color: ${(props) => props.theme['yellow-400']};
    font-weight: 400;
    font-size: 1.5rem;

    @media (max-width: 56.25em) {
      font-size: 1.2rem;
    }
  }
`;
