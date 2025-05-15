import styled from "@emotion/styled";

export const LoginWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  height: 90vh;
`;

export const LoginText = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const GoJoin = styled.p`
  color: ${({theme})=> theme.color.green};
  text-decoration:underline;
`;