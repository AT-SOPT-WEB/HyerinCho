import { css } from "@emotion/react";

export const wrapperStyle = (theme) => css`
  width: 30rem;
  border: 0.1rem solid ${theme.color.blue200};
  padding: 0.8rem;
  border-radius: 0.8rem;
  text-align: center;
`;

export default{
  wrapperStyle,
}