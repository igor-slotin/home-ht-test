import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`

export interface IProps {
  primary?: boolean;
  wide?: boolean;
  height?: boolean;
  smallBtn?: boolean;
  active?: boolean;
  editButton?:boolean;
}

export const Button = styled.button<IProps>`
  font-size: 16px;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-weight: normal;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: '#FFFFFF'
  border: none;
  background: #FD3B1A center;
  height: auto;
  min-height: 52px;
  min-width: 205px;
  width: 100%;
  transition: all .15s ease;

      &:not(:disabled) {
        outline: none;
       box-shadow: none;
      }
      &:hover, &:active {
       color: #ffffff;
       background: #FD3B1A;
       transform: translateY(-1px);
       box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
       
       transition: all .15s ease;
       .icon-right-chevron:before, .icon-left-chevron:before {
         color: #ffffff;
       }
       
      }
       &:focus, &:active:focus {
        outline: none;
        box-shadow: none;
        .icon-right-chevron:before {
         color: #ffffff;
       }
      }
     @media screen and (min-width: 700px) {
        min-width: 205px;
        height: auto;
        padding: 1rem;
        max-width: 100%;
        margin: 0 auto;
     }
`;
