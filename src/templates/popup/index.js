import React, { Component } from 'react';
import { Modal } from 'antd';

class GameOverPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { visible, handleOk, handleCancel, score, time } = this.props;
        return (
            <Modal
                title="Game Over"
                visible={visible}
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}
            >
                <p> Score : {score}  Time consumed: {time}</p>
            </Modal>
        );
    }
}

export default GameOverPopup;