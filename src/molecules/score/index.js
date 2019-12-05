import React from 'react';
import BadgeWrapper from '../../atoms/badge';


export default function ScoreCard({ score }) {
    return (
        <BadgeWrapper heading="Score" value={score} color="#52c41a" />
    )
}