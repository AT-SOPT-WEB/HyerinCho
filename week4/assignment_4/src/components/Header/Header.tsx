import { useEffect, useState } from 'react';
import { CheckNicknameAPI } from '../../apis/CheckNicknameAPI';
import * as S from './Header.css';
import { Link, useNavigate } from 'react-router';

interface HeaderProps {
  userId: string | null;
}

const Header = ({userId}:HeaderProps) => {
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!userId) return;

    const fetchNickname = async() => {
      const result = await CheckNicknameAPI(userId);
      if(result.success){
        setNickname(result.data)
      }else{
        setNickname('');
      }
    }
    fetchNickname();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  }

  return (
    <S.HeaderWrapper>
      <S.CategoryWrapper>
        <Link to="/mypage/info">
          <S.Text>내 정보</S.Text>
        </Link>
        <Link to="/mypage/search">
          <S.Text>SOPT 회원 조회하기</S.Text>
        </Link>
        <S.Text onClick={handleLogout}>로그아웃</S.Text>
      </S.CategoryWrapper>
      <div>
        <S.Text>{nickname}</S.Text>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;