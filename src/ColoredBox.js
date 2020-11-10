import * as React from 'react';
import './ColoredBox.css';

class ColoredBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datetime: new Date().toTimeString().substring(0,8)
        }

        this.timer = null;
    }

    componentDidMount() {
        this.timer = window.setInterval(() => {
            this.setState({
                datetime: new Date().toTimeString().substring(0,8)
            });
        }, 100);
    }

    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    render() {
        let styleVar = { backgroundColor: "#" + this.props.color, transform:`translate(${this.state.xOffset}px,${this.state.yOffset}px)` };

        return (
            <div className="coloredBox" style={styleVar} onClick={() => {this.props.deleteBox(this.props.index)}}>
                {"I am a box at " + this.state.datetime}
            </div>
        );
    }
}

export default ColoredBox;
