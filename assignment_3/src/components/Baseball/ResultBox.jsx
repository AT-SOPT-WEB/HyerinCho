import style from './ResultBoxStyle.js'
const ResultBox = ({result}) => {
  return (
    <div>
      <div css={style.wrapperStyle}>
        {result}
      </div>
    </div>
  );
};

export default ResultBox;