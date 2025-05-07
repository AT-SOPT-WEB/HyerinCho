import style from './GithubSearchStyle'
import {useState, useEffect} from 'react';
import Result from './Result.jsx';

const GithubSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [userInfo, setUserInfo] = useState({ status: 'idle', data: null });
  const [searchHistory, setSearchHistory] = useState([]); //최근 검색어 저장 배열
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userList")) || [];
    setSearchHistory(stored);
  }, []);

  //Github API
  const getUserInfo = async (user) => {
    setUserInfo({ status: 'pending', data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUserInfo({ status: 'resolved', data });
    } catch {
      setUserInfo({ status: 'rejected', data: null });
      setErrorMessage('결과를 찾을 수 없습니다. 다시 시도해주세요');
    }
  };

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
  }

  //엔터키 눌렀을 때 제출
  const submitValue = (e) => {
    if(e.key === "Enter"){

      getUserInfo(inputValue);
      
      if(searchHistory.includes(inputValue)) {
        setInputValue('');
        return;
      };

      //최근검색어 최대 3개 구현
      let updatedHistory = [...searchHistory];
      if (updatedHistory.length === 3) {
        updatedHistory.shift();
      }

      updatedHistory.push(inputValue);
      
      //로컬스토리지에 저장
      localStorage.setItem("userList", JSON.stringify(updatedHistory));
      setSearchHistory(updatedHistory);

      setInputValue('');
    }
  }

  //최근 검색어 삭제
  const handleDelete = (users) => {
    const updated = searchHistory.filter((user) => user !== users);
    localStorage.setItem('userList', JSON.stringify(updated));
    setSearchHistory(updated);
  }

  const deleteCard = () => {
    setUserInfo({ status: 'idle', data: null });
  }

  //재검색
  const handleResearch = (user) => {
    getUserInfo(user)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='Github 아이디를 입력해주세요'
        css={style.inputStyle}
        value={inputValue}
        onChange={handleSearchChange}
        onKeyDown={submitValue}
        />

        {searchHistory.length > 0 && 
        <>
        <p css={style.recentSearchText}>최근검색어</p>
        <div css={style.recentSearchWrapper}>
          {searchHistory.map((user, index)=> (
            <div key={index} css={style.recentSearch}>
              <p 
              onClick={() => handleResearch(user)}
              css={style.researchName}
              >{user}</p>
              <button 
              css={style.deleteButton}
              onClick={() => handleDelete(user)}
              >x</button>
              </div>
          ))}  
        </div>
        </>
        }

        <Result
          status={userInfo.status}
          data={userInfo.data}
          errorMessage={errorMessage}
          onDelete={deleteCard}
        />
    </div>
  );
};

export default GithubSearch;