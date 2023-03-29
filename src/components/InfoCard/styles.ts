import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  background-color: ${(props) => props.theme['blue-800']};
  width: 20rem;
  display: flex;

  padding: 1.5rem 1rem;
  border-radius: 0.8rem;
  border: 2px solid ${(props) => props.theme['blue-100']};
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      line-height: 1.1rem;
      font-size: 1rem;
      width: 50%;
    }
  }

  h2 {
    text-align: center;
    color: ${(props) => props.theme['blue-100']};
  }
`;
