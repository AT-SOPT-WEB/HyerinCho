import * as S from "./JoinPage.css";
import InputFilled from "../../components/InputFilled";
import SubmitBtn from "../../components/SubmitBtn";
import { Link } from "react-router";

interface InputIdProps {
  id: string;
  message: string;
  handleIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitId: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputId = ({ id, message, handleIdChange, submitId }: InputIdProps) => {
  return (
    <div>
      <S.FeatureText>아이디</S.FeatureText>
        <S.Form onSubmit={submitId}>
        <InputFilled 
          placeholderText="아이디를 입력해주세요(8~20자)" 
          onChange={handleIdChange}
        />
        {message && <S.Message>{message}</S.Message>}
          <SubmitBtn buttonText="다음" state={id !== "" && id.length <= 20} />
      </S.Form>
      <S.GoLoginWrapper>
        <p>이미 회원이신가요?</p>
        <Link to="/login">
          <S.GoLogin>로그인</S.GoLogin>
        </Link>
      </S.GoLoginWrapper>
    </div>
  );
};

export default InputId;