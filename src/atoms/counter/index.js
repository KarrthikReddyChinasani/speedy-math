import React from 'react';
import './style.css';

export default function CounterCard({ timer }) {
    return (
        <span className="counter-timer">
            Timer : {timer}
        </span>
    )
}