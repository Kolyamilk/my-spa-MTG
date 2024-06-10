import React from 'react';

type State = {
    time: string;
};

class Watch extends React.Component<{}, State> {
    timerID!: number; // Изменил тип на number
    constructor(props: {}) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    }
    componentDidMount() {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        window.clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render() {
        return (
            <div>{this.state.time}</div>
        );
    }
}
export default Watch;