import styled from 'styled-components';
const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  min-width: 205px;
  border: 1px solid #DDDDDD;
  margin: 20px 0;
  @media (max-width: 700px) {
    margin-top: 0;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`
export default InputField;