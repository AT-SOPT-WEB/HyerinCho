import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 6.5rem;
  background-color: ${({theme})=>theme.color.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.3rem;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
`;

export const Text = styled.p`
  color: white;
  cursor: pointer;
`;
