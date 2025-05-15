import { useState } from 'react';
import InputFilled from '../../components/InputFilled';
import SubmitBtn from '../../components/SubmitBtn';
import * as S from './GetUserPage.css'
import { getUserAPI } from '../../apis/GetUserAPI';

const GetUserPage = () => {
  const [nickname, setNickname] = useState('');
  const [nameData, setNameData] = useState([]);

  const handleNickname = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }

  const submitNickname = async(e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await getUserAPI(nickname);
    if(result.success){
      setNameData(result.data.nicknameList);
    }else{
      console.log("실패");
    }
  }
  return (
    <S.GetUserWrapper>
      <S.Title>SOPT 회원 조회하기</S.Title>
      <S.Form onSubmit={submitNickname}>
        <p>닉네임</p>
        <InputFilled 
        placeholderText="새 닉네임을 입력하세요"
        onChange={handleNickname}
        />
        <SubmitBtn buttonText="저장" state={true}/>
      </S.Form>
      <S.DataWrapper>
        {nameData.map((data, index)=> (
          <p key={index}>{data}</p>
        ))}
      </S.DataWrapper>
    </S.GetUserWrapper>
  );
};

export default GetUserPage;