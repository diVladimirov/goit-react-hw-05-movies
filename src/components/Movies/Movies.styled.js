import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const InputStyled = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: 18px;
  line-height: 24px;
  padding: 8px 16px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #10a446;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #f2e310;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
