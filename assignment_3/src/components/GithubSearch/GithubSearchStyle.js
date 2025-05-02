import { css } from "@emotion/react";

export const inputStyle = (theme) => css`
  border: 0.1rem solid ${theme.color.blue200};
  background-color: ${theme.color.blue100};
  width: 30rem;
  padding: 1rem;
  border-radius: 1rem;
  outline: none;
`;

export const recentSearchText = css`
  font-weight: 600;
  padding: 1rem 0 0.5rem 0;
`;

export const recentSearchWrapper = css`
  display: flex;
  gap: 0.5rem;
`;

export const recentSearch = (theme) => css`
  border: 0.1rem solid ${theme.color.blue200};
  display: flex;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const deleteButton = css`
  background-color: transparent;
  outline: none;
`;

export default{
  inputStyle,
  recentSearchText,
  recentSearchWrapper,
  recentSearch,
  deleteButton,
}