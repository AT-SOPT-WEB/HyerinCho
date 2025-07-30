import InputId from "./InputId";
import InputPwd from "./InputPwd";
import InputNickname from "./InputNickname";
import useJoinForm from "../../hooks/useJoinForm";
import { JoinWrapper, JoinText } from "./JoinPage.css";

const JoinPage = () => {
  const joinForm = useJoinForm();
  const { isIdValid, isNicknameValid } = joinForm;

  return (
    <JoinWrapper>
      <JoinText>회원가입</JoinText>
      {(!isIdValid && !isNicknameValid) && <InputId {...joinForm} />}
      {(isIdValid && !isNicknameValid) && <InputPwd {...joinForm} />}
      {(isNicknameValid && !!isIdValid) && <InputNickname {...joinForm} />}
    </JoinWrapper>
  );
};

export default JoinPage;