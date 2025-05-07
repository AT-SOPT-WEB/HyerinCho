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

export const researchName = css`
  cursor: pointer;
`;

export const errorMessage = css`
  text-align: center;
  padding: 1rem 0;
  font-weight: 600;
`;

export const loading = css`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`;

export const spinner = (theme) => css`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.6rem solid rgba(0, 0, 0, 0.1);
  animation: spin 1s infinite linear;
  border-top-color: ${theme.color.blue300};

  @keyframes spin {
    to{
      transform: rotate(360deg);
    }
  }
`;

export default{
  inputStyle,
  recentSearchText,
  recentSearchWrapper,
  recentSearch,
  deleteButton,
  researchName,
  errorMessage,
  loading,
  spinner,
}