import {wrapperStyle} from './ResultBoxStyle.js'

const ResultBox = ({result}) => {
  return (
      <div css={wrapperStyle}>
        {result}
      </div>
  );
};

export default ResultBox;