import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`

export const ContentWrapper = styled(Container)`
  justify-content: center;
  font-size: 2rem;
  height: calc(100% - 20px);
`

export const ProgressBar = styled(Progress)`
  @media (max-width: 700px) {
    position: fixed;
    bottom: 0;
  }
`