import { useState } from "react";
import {LoginAPI} from "../apis/LoginAPI";
import { useNavigate } from "react-router";

const useLoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  
  const submitLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await LoginAPI(id, password);
    if (result.success) {
      navigate('/mypage/info');
    } else {
      setErrorMessage(result.message);
    }
  }
  return (
    {id, password, handleIdChange, handlePwdChange, submitLogin, errorMessage}
  );
};

export default useLoginForm;