import styled from "styled-components";

export const Navbars = styled.nav`
  width: 100%;
  height: 90px;
  background: black;
  display: flex;
  justify-content: flex-end;
`;

export const ul = styled.ul`
  padding: 0px 30px;
  height: 100%;
  width: 600px;
  display: flex;
`;

export const li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: blanchedalmond;
  height: 100%;
  width: 150px;
  a {
    &:hover {
      background: rgb(202, 202, 202);
      color: rgb(66, 66, 66);
    }
  }
`;
