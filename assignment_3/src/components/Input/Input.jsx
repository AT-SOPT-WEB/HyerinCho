import Baseball from '../Baseball/BaseBall.jsx';
import GithubSearch from '../GithubSearch/GithubSearch.jsx';

const Input = ({ clickValue }) => {
  return (
    <div>
      {clickValue === 'baseballGame' ? <Baseball/> : <GithubSearch />}
    </div>
  );
};

export default Input;