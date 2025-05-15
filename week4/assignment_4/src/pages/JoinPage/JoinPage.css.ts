import styled from "@emotion/styled";

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 90vh;
`;

export const FeatureText = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  width: 100%;
  padding-left: 0.3rem;
`;

export const JoinText = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const GoLoginWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem 0;
`;

export const GoLogin = styled.p`
  color: ${({theme})=> theme.color.green};
  text-decoration:underline;
`;

export const Message = styled.p`
  color: red;
  font-size: 0.8rem;
  padding: 0 0.3rem;
`;