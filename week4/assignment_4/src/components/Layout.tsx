import Header from './Header/Header';
import styled from '@emotion/styled';
import { Outlet } from 'react-router';

const Layout = () => {
  const userId = localStorage.getItem("userId");
  return (
    <Wrapper>
      <Header userId={userId}/>
      <Contents>
        <Outlet />  
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Contents = styled.main`
  flex: 1;
  padding-top: 6.5rem;
`;


export default Layout;