import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  margin-top: 15vh;
  max-width: 575px;
  padding: 40px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const FormTag = styled.form`
  border: thick double #630990;
  padding: 15px;
`;
export const LabelNames = styled.p`
  max-width: 100px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: bold;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  margin: auto;
  border: none;
  background-color: #630990;
  color: #fff;
  cursor: pointer;
`;

export const PhonebookHeading = styled.h1`
  max-width: 200px;
  margin: auto;
  margin-bottom: 20px;
`;
export const ContactsHeading = styled.h2`
  max-width: 100px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;
