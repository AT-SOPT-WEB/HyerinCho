import { css } from "@emotion/react";

export const cardStyle = (theme) => css`
  background-color: ${theme.color.blue300};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin-top: 2rem;
`;

export const deleteBoxWrapper = css`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 1rem;
`;

export const deleteBoxStyle = (theme) => css`
  background-color: ${theme.color.blue200};
  padding: 0.5rem;
  border-radius: 10rem;
  cursor: pointer;
`

export const deleteButton = css`
  background-color: transparent;
  color: white;
  font-weight: 700;
`;

export const profileStyle = css`
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
  cursor: pointer;

  &:hover{
    transition-duration: 350ms;
    transform: scale(1.1);
  }
`;

export const titleStyle = (theme) => css`
  margin-top: 3rem;
  color: white;
  cursor: pointer;

  &:hover{
    color: ${theme.color.blue200};
    transition-duration: 300ms;
  }
`;

export const smallTitleStyle = (theme) => css`
  color: ${theme.color.blue100};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.8rem;
  margin-bottom: 2rem;
`;

export const followWrapper = css`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const follow = (theme) => css`
  background-color: ${theme.color.blue200};
  color: ${theme.color.blue100};
  text-align: center;
  padding: 0.5rem 4.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default{
  cardStyle,
  deleteBoxWrapper,
  deleteBoxStyle,
  deleteButton,
  profileStyle,
  titleStyle,
  smallTitleStyle,
  followWrapper,
  follow,
}