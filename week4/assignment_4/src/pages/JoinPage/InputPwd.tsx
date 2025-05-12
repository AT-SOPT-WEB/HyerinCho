import InputFilled from "../../components/InputFilled";
import SubmitBtn from "../../components/SubmitBtn";
import * as S from './JoinPage.css';

interface InputPwdProps {
  password: string;
  checkPwd: string;
  pwMessage: string;
  handlePwChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePwCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCheckPasswordValid: boolean;
  submitPwd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputPwd = ({password, checkPwd, pwMessage, handlePwChange, handlePwCheckChange, isCheckPasswordValid, submitPwd}: InputPwdProps) => {
  return (
    <div>
      <S.FeatureText>비밀번호</S.FeatureText>
      <S.Form onSubmit={submitPwd}>
        <InputFilled 
          placeholderText="비밀번호를 입력해주세요(8~20자)" 
          onChange={handlePwChange} />
        <InputFilled 
          placeholderText="비밀번호를 확인" 
          onChange={handlePwCheckChange} />
          <S.Message>{pwMessage}</S.Message>
        <SubmitBtn 
          buttonText="다음" 
          state={password !== "" && checkPwd !== "" && isCheckPasswordValid}/>
      </S.Form>
    </div>
  );
};

export default InputPwd;