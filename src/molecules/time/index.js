import React from 'react';
import BadgeWrapper from '../../atoms/badge';


export default function TimeCard({ time }) {
    return (
        <BadgeWrapper heading="Total Time" value={time} color="#00838F" />
    )
}