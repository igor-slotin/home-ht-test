import styled from 'styled-components';

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
  font-size: 1.5rem;
  height: calc(100% - 20px);
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const ButtonWrapper = styled.section`
  width: 100%
`