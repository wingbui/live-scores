import React from 'react'
import { useCounterUp } from '../../hooks/useCounterUp'
import { ItemPoint } from './StyledScores'

const ScorePoint = ({score}) => {
    const counter = useCounterUp({ num: score, times: 10});

    return (
        <ItemPoint>{counter}pt</ItemPoint>
    )
}

export default ScorePoint;
