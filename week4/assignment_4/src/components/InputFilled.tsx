import styled from "@emotion/styled";

interface InputFilledProps {
  placeholderText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

function InputFilled({placeholderText, onChange}: InputFilledProps) {
  return(
      <Input 
      onChange={onChange}
      type="text" 
      placeholder={placeholderText}
      />
  )
}

const Input = styled.input`
  width: 25rem;
  height: 3rem;
  padding: 0 0.8rem;
  outline: none;
  border: 1px solid ${({theme})=>theme.color.gray200};
  border-radius: 0.5rem;
  background-color: ${({theme})=>theme.color.gray100};
`;

export default InputFilled;