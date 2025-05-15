import styled from "@emotion/styled";

interface SubmitBtnProps{
  buttonText: string
  state: boolean
}

function SubmitBtn({buttonText, state}: SubmitBtnProps) {
  return(
    <SubmitButton state={state}>
      {buttonText}
    </SubmitButton>
  )
}

const SubmitButton = styled.button<{state: boolean}>`
  width: 25rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${({theme, state})=> state ? theme.color.green : theme.color.gray200};
  color: white;
`;

export default SubmitBtn;