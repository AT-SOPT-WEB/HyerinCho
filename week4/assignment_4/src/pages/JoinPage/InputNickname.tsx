import InputFilled from '../../components/InputFilled';
import SubmitBtn from '../../components/SubmitBtn';
import * as S from './JoinPage.css'

interface InputNicknameProps {
  nickname: string;
  handleNicknameChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleJoin: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

const InputNickname = ({nickname, handleNicknameChange, handleJoin}: InputNicknameProps) => {
  return (
    <S.Form onSubmit={handleJoin}>
      <InputFilled 
        placeholderText="닉네임을 입력해주세요" 
        onChange={handleNicknameChange} />
      <SubmitBtn 
        buttonText="회원가입 하기"
        state={nickname !== ""}/>
    </S.Form>
  );
};

export default InputNickname;