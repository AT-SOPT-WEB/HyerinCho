import { css } from "@emotion/react";

export const headerStyle = (theme) => css`
  background-color: ${theme.color.blue200};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`

export const titleStyle =  css`
  font-size: 1.5rem;
  font-weight: 400;
`

export const buttonWrapperStyle = css`
  display: flex;
  gap: 1rem;
`

export const buttonStyle = ({theme, isActive}) => css`
  background-color: ${isActive ? theme.color.blue300 : theme.color.blue200};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  &:hover{
    background-color: ${theme.color.blue300};
  }
`
export default{
  headerStyle,
  titleStyle,
  buttonWrapperStyle,
  buttonStyle,
}