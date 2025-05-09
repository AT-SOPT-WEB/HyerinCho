import {useState} from 'react';
import Header from "./components/Header/Header.jsx";
import {mainStyle} from './AppStyle.js';
import Baseball from './components/Baseball/BaseBall.jsx';
import GithubSearch from './components/GithubSearch/GithubSearch.jsx';

function App() {
  const [clickValue, setClickValue] = useState('githubSearch');

  return (
    <>
    <Header clickValue={clickValue} setClickValue={setClickValue}/>
    <main css={mainStyle}>
      {clickValue === 'baseballGame' ? <Baseball/> : <GithubSearch/>}
    </main>
    </>
  )
}

export default App
