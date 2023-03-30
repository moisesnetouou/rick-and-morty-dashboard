import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  background-color: ${(props) => props.theme['blue-800']};
  width: 100%;

  padding: 1rem 1rem;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme['blue-100']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      line-height: 1.5rem;
      font-size: 1.2rem;
      width: 14rem;
    }
  }

  h2 {
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-100']};
    font-size: 3rem;
    font-weight: 400;

    span {
      font-size: 1.2rem;
    }
  }
`;
