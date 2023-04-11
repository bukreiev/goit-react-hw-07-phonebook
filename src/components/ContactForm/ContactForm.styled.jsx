import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(171, 171, 171, 0.4);
  border-radius: 8px;
  margin: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px;
  width: 300px;
`;

export const Label = styled.label`
  color: #fff;
  margin: 0;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #e4f1fa;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #aecfe4;
  }
`;
