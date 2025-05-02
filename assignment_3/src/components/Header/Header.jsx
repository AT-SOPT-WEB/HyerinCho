import { useTheme } from '@emotion/react';
import style from './HeaderStyle.js'

const Header = ({clickValue, setClickValue}) => {

  //isActive 값 넘기기 위해
  const theme = useTheme();

  return (
    <header css={style.headerStyle}>
      <h1 css={style.titleStyle}>⚾️ 숫자야구 || 깃허브 검색 😺</h1>
      <div css={style.buttonWrapperStyle}>
        <button 
        css={style.buttonStyle({
          theme,
          isActive: clickValue === 'githubSearch',
        })}
        onClick={() => setClickValue('githubSearch')}
        >
        깃허브 검색 🔍
        </button>

        <button 
        css={style.buttonStyle({
          theme,
          isActive: clickValue === 'baseballGame',
        })}
        onClick={()=>setClickValue('baseballGame')}
        >
        숫자 야구 ⚾️
        </button>
      </div>
    </header>
  );
};

export default Header;