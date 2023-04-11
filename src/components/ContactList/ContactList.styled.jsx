import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgba(171, 171, 171, 0.4);
  border-radius: 8px;
  margin: 30px;
  margin-top: 0;
  padding: 20px;
  width: 300px;
  list-style: none;
`;

export const Item = styled.li`
  color: #fff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  border: 1px dashed rgb(255, 255, 255);
  padding: 4px;
  margin: 0;
  margin-bottom: 15px;
  :last-child {
    margin-bottom: 0;
  }
`;
