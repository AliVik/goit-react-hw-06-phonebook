import styled from "styled-components";

export const ContactListTag = styled.ul`
  margin: auto;
  padding: 0;
  max-width: 300px;
  margin-top: 30px;
`;

export const ContactListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-shadow: -1px 1px 15px -9px rgba(34, 60, 80, 0.6);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactName = styled.span`
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  background-color: #bd2d3c;
  color: #fff;
  border: none;
  height: 30px;
`;
