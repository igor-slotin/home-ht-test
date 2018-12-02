import styled from 'styled-components';

import { RadioGroup, RadioButton } from 'react-radio-buttons';

export const Container = styled.section`
  display: block;
  margin-bottom: 10px;
`;
export const Group = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`

export const Button = styled(RadioButton)`
  height: 20px;
  
`

