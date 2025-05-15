import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage/LoginPage';
import JoinPage from '../pages/JoinPage/JoinPage';
import MyPage from '../pages/MyPage/MyPage';
import GetUserPage from '../pages/GetUserPage/GetUserPage';
import Layout from '../components/Layout';

const Router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/join',
    element: <JoinPage/>
  },
  {
    path: '/mypage',
    element: <Layout />,
    children: [
      {
        path: 'info',
        element: <MyPage />
      },
      {
        path: 'search',
        element: <GetUserPage />
      }
    ]
  }
])

export default Router;