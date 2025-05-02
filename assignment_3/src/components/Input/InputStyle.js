/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const inputStyle = (theme) => css`
  border: 0.1rem solid ${theme.color.blue200};
  background-color: ${theme.color.blue100};
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  outline: none;
`;

export const errorMessage = (theme) => css`
  text-align: center;
  color: ${theme.color.blue200};
  font-weight: 600;
  padding: 1rem 0 1.8rem 0;
`

export default{
  inputStyle,
  errorMessage
}