import styled from "styled-components";

export const OurBest = styled.section`
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 2em 0;

  & > h2 {
    margin: 1em 0 0.5em;
  }

  & > p {
    width: 30em;
    margin: auto;
  }
  @media (max-width: 780px) {
    & > p {
      width: auto;
    }
  }
`;
