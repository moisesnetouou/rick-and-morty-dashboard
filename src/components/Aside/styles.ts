import styled from 'styled-components';

export const AsideContainer = styled.aside`
  background-color: ${(props) => props.theme['yellow-400']};
  width: 20rem;
  height: 100vh;

  > div {
    width: 20rem;
    height: 100%;
    padding: 2rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-top: 4rem;

      color: ${(props) => props.theme['blue-800']};
    }
  }

  @media (max-width: 56.25em) {
    display: none;
  }
`;
