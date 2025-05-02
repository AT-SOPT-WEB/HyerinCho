import style from './CardStyle.js';

const Card = ({avatar_url, name, login, bio, html_url, followers, following, deleteCard}) => {
  return (
    <main css={style.cardStyle}>
      <div css={style.deleteBoxWrapper}>
        <div css={style.deleteBoxStyle}>
          <button 
          css={style.deleteButton}
          onClick={deleteCard}
          >X</button>
        </div>
      </div>
      <a href={html_url}>
        <img 
        src={avatar_url} 
        alt="github 프로필 사진"
        css={style.profileStyle}
        />
      </a>
      <div css={style.middleWrapper}>
        <a href={html_url}>
          <h1 css={style.titleStyle}>{name}</h1>
        </a>
        <div css={style.smallTitleStyle}>
          <p>{login}</p>
          <p>{bio}</p>
        </div>
      </div>
        <div css={style.followWrapper}>
          <div css={style.follow}>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div css={style.follow}>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
    </main>
  );
};

export default Card;