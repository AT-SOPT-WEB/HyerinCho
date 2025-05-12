import React, { useState } from "react";
import InputFilled from "../../components/InputFilled";
import * as S from './MyPage.css';
import SubmitBtn from "../../components/SubmitBtn";
import { updateUsernameAPI } from "../../apis/MyPageAPI";

const MyPage = () => {
  const userId = localStorage.getItem("userId") ?? "";
  const [newNickname, setNewNickname] = useState('');

  const handleNewNicknameChange = (e:React.ChangeEvent<HTMLInputElement>) => setNewNickname(e.target.value);

  const handleUpdateNickname = async(e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await updateUsernameAPI(userId, newNickname);
    if(result.success){
      alert('정보 변경에 성공했어요');
      
      setNewNickname('');
    }else{
      alert("정보 변경에 실패했어요");
    }
  }
  return (
    <S.UpdateWrapper>
      <S.Title>내 정보 수정하기</S.Title>
      <S.Form onSubmit={handleUpdateNickname}>
        <p>새 닉네임</p>
        <InputFilled 
        placeholderText="새 닉네임을 입력하세요"
        onChange={handleNewNicknameChange}
        />
        <SubmitBtn buttonText="저장" state={newNickname !== ""}/>
      </S.Form>
    </S.UpdateWrapper>
  );
};

export default MyPage;