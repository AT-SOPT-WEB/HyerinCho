import React from 'react';
import * as style from './GithubSearchStyle';

const SearchHistory = ({searchHistory, handleResearch, handleDelete}) => {
  return (
    <div>
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
    </div>
  );
};

export default SearchHistory;