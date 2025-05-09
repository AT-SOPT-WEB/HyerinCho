import * as style from './GithubSearchStyle'
import Card from '../Card/Card';

const Result = ({ status, data, errorMessage, onDelete }) => {
  if (status === 'pending') {
    return (
      <div css={style.loading}>
        <div css={style.spinner}></div>
      </div>
    );
  }

  if (status === 'rejected') {
    return <p css={style.errorMessage}>{errorMessage}</p>;
  }

  if (status === 'resolved') {
    return (
      <Card
        deleteCard={onDelete}
        avatar_url={data.avatar_url}
        name={data.name}
        login={data.login}
        bio={data.bio}
        html_url={data.html_url}
        followers={data.followers}
        following={data.following}
      />
    );
  }

};

export default Result;