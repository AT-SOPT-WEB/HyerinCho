import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { JoinAPI } from "../apis/JoinAPI";

const useJoinForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [nickname, setNickname] = useState('');

  const [message, setMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');

  const [isIdValid, setIsIdValid] = useState(false);
  const [isCheckPasswordValid, setIsCheckPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const navigate = useNavigate();

  //비밀번호 확인
  useEffect(() => {
    if (password === '' || checkPwd === '') {
      setIsCheckPasswordValid(false);
      setPwMessage('');
      return;
    }

    if (password !== checkPwd) {
      setIsCheckPasswordValid(false);
      setPwMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsCheckPasswordValid(true);
    setPwMessage('');
  }, [password, checkPwd]);


  //onChange로 변하는 값
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handlePwCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => setCheckPwd(e.target.value);
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);

  //id 제출 및 다음
  const submitId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const regex = /^.{8,20}$/;
    if (regex.test(id)) {
      setMessage('');
      setIsIdValid(true);
      return
    }else{
      setMessage('아이디는 8~20자 사이로 입력해주세요.');
      setIsIdValid(false);
    }
  };

  //비밀번호 제출 및 다음
  const submitPwd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNicknameValid(true); 
  };

  //회원가입 버튼
  const handleJoin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await JoinAPI(id, password, nickname);
    if(result.success){
      alert(`회원가입에 성공하였습니다.  닉네임: ${result.data.data.nickname}`);
      navigate('/login');
    }else{
      alert(result.data.message);
    }
  };

  return {
    id,
    password,
    checkPwd,
    nickname,
    message,
    pwMessage,
    isIdValid,
    isCheckPasswordValid,
    isNicknameValid,
    handleIdChange,
    handlePwChange,
    handlePwCheckChange,
    handleNicknameChange,
    submitId,
    submitPwd,
    handleJoin,
  };
};

export default useJoinForm;