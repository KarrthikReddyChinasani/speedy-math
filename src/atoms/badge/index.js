import React from 'react';
import "./style.css";
import { Badge } from 'antd';

export default function BadgeWrapper({ heading, value, color }) {
    return (
        <span className="score-wrapper">
            {heading} <Badge count={value} style={{ backgroundColor: `${color}`, fontSize: 16 }} />
        </span>
    );
}