import {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import style from './AppStyle.js';
import Input from './components/Input/Input.jsx';

function App() {
  const [clickValue, setClickValue] = useState('githubSearch');

  return (
    <>
    <Header clickValue={clickValue} setClickValue={setClickValue}/>
    <main css={style.mainStyle}>
      <Input clickValue={clickValue}/>
    </main>
    </>
  )
}

export default App
