import InputFilled from "../../components/InputFilled";
import SubmitBtn from "../../components/SubmitBtn";
import * as S from './LoginPage.css';
import { Link } from "react-router";
import useLoginForm from "../../hooks/useLoginForm";

function LoginPage() {
  
  const {id, password, handleIdChange, handlePwdChange, submitLogin, errorMessage} = useLoginForm();


  return (
    <S.LoginWrapper>
      <S.LoginText>로그인</S.LoginText>
      <S.Form onSubmit={submitLogin}>
        <InputFilled onChange={handleIdChange} placeholderText ="아이디"/>
        <InputFilled onChange={handlePwdChange} placeholderText ="비밀번호"/>
        <p>{errorMessage}</p>
        <SubmitBtn buttonText = "로그인" state={id !=="" && password!==""}/>
      </S.Form>
      <Link to="/join">
        <S.GoJoin>회원가입</S.GoJoin>
      </Link>
    </S.LoginWrapper>
  );
};

export default LoginPage;