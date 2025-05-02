import {useState, useEffect} from 'react';
import style from './BaseBallStyle.js'
import ResultBox from './ResultBox.jsx';

const Baseball = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [randomValue, setRandomValue] = useState(''); //게임 정답 저장
  const [results, setResults] = useState([]); //게임 기록 저장
  const [isGameOver, setIsGameOver] = useState(false); //게임이 끝났을 때 input 막기

  // 중복 없는 랜덤 3자리 생성 함수
const generateUniqueRandomNumber = () => {
  const digits = new Set();
  while (digits.size < 3) {
    const rand = Math.floor(Math.random() * 10);
    digits.add(rand);
  }
  return [...digits].join('');
};

//게임 리셋
const resetGame = () => {
  setMessage('');
  setResults([]);
  const newRandom = generateUniqueRandomNumber();
  setRandomValue(newRandom);
  setIsGameOver(false);
};

useEffect(() => {
  resetGame();
}, []);

const handleSearchChange = (e) => {
  const value = e.target.value;
  setInputValue(value);
  
  //3자리 중복 확인
  if(value.length === 3){
    const unique = new Set(value);
    if (unique.size < 3) {
      setMessage('서로 다른 숫자 3자리를 입력해주세요!');
      return;
    }
    setMessage('');
    
    //스트라이크, 볼 계산
    let strike = 0
    let ball = 0
    for(let i = 0; i < 3; i++){
      if(randomValue[i] == value[i]){
        strike += 1
      }else if (randomValue.includes(value[i])) {
        ball+= 1;
      }
    }

    const resultText = `${value} - ${strike}S ${ball}B`;
    const newResults = [...results, resultText];
    setResults(newResults);
    setInputValue('');
    setMessage(`${strike}스트라이크 ${ball}볼`)
    console.log(randomValue)

    if (strike === 3) {
      setMessage('🎉 정답입니다! 3초 후 게임이 초기화됩니다.');
      setIsGameOver(true);
      setTimeout(resetGame, 3000);
    }else if (newResults.length >= 10) {
      setMessage('😢 게임 패배! 5초 후 게임이 초기화됩니다.');
      setIsGameOver(true);
      setTimeout(resetGame, 5000);
    }
  }
}
  return (
    <div>
      <input
      type="text"
      placeholder='3자리 숫자를 입력해주세요'
      css={style.inputStyle}
      onChange={handleSearchChange}
      value={inputValue}
      maxLength={3}
      disabled={isGameOver}
      />
      {message && <p css={style.errorMessage}>{message}</p>}
      <div css={style.resultBoxWrapper}>   
      {results.map((result, index) => (
          <ResultBox key={index} 
          result={result} 
          />
        ))}
      </div>
    </div>
  );
};

export default Baseball;