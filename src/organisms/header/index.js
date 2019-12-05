import React from "react";
import { Row, Col } from 'antd';
import ScoreCard from "../../molecules/score";
import TimeCard from "../../molecules/time";
import CounterCard from "../../atoms/counter";

function Header({ score, totalTime, timer }) {
    return (
        <div>
            <Row type="flex" justify="center" align="middle">
                <Col span={9} offset={15}>
                    <ScoreCard score={score} />
                    <TimeCard time={totalTime} />
                    <CounterCard timer={timer} />
                </Col>
            </Row>
        </div>
    )
}

export default Header;