import React from 'react';
import initData from '../../data.json'
import { formatData } from './utils';

import { ScoreList, ItemContainer, ItemRanking, ItemImage, ItemName } from './StyledScores';
import ScorePoint from './ScorePoint';

const Scores = () => {
  const [data, setData] = React.useState(formatData(initData))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setData(formatData);
    }, 1000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <ScoreList>
      {data.map((item) => {
        const { userID, ranking, picture, displayName, score} = item;
        return (
          <ItemContainer key={userID} ranking={ranking}>
            <ItemRanking ranking={ranking}>{ranking}</ItemRanking>
            <ItemImage picture={picture}></ItemImage>
            <ItemName>{displayName}</ItemName>
            <ScorePoint score={score} />
          </ItemContainer>
        );
      })}
    </ScoreList>
  );
};

export default Scores;
