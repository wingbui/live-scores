import styled from 'styled-components';

import { FIFTH_COLOR, WHITE } from '../../utils/constants';
import { setBackground, setFlex } from '../../utils/styles';

import { detectBgRank } from './utils';

export const ScoreList = styled.ul`
    border-radius: 10px;
    background-color: ${props => props.theme.listBg};
    position: absolute;
    width: 90%;
    height: 500px;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
`;

export const ItemContainer = styled.li`
  border-bottom: ${props => props.ranking !== 10 ? `1px solid ${props.theme.line}` : ''};
  display: flex;
  align-items: center;
  height: 50px;
  position: absolute;
  top: ${(props) => 50 * (props.ranking - 1)  }px;
  transition: all 0.3s ease;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
`;

export const ItemRanking = styled.div`
  ${setFlex()};
  background-color: ${(props) => detectBgRank(props.ranking)};
  border-radius: 50%;
  color: ${WHITE};
  margin-right: 0.5rem;
  font-size: 14;
  text-align: center;
  width: 22px;
  height: 22px;
`;

export const ItemImage = styled.div`
  border-radius: 50%;
  background: ${props => setBackground(props.picture, props.theme.imgBg)} center/cover;
  border: 2px solid ${WHITE};
  margin-right: 0.5rem;
  width: 36px;
  height: 36px;
`;

export const ItemName = styled.p`
  color: ${props => props.theme.text};
  margin-right: auto;
`;

export const ItemPoint = styled.p`
  color: ${FIFTH_COLOR};
`;
