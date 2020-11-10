import * as React from 'react';
import './GridBox.css';
import BoxAdder from './BoxAdder';
import ColoredBox from './ColoredBox';

class GridBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: []
        };
    }

    addHexBoxToGrid(color) {
        this.setState({
            boxes: [...this.state.boxes, color]
        });
    }

    deleteBox(index) {
        let arr = this.state.boxes;
        if (index <= arr.length) {
            arr = [...arr.slice(0,index),...arr.slice(index+1,arr.length)]
        }
        this.setState({
            boxes: arr
        });
    }

    render() {
        return (
            <>
                <BoxAdder addHexBox={this.addHexBoxToGrid.bind(this)} />
                <div id="grid-container">
                    {this.state.boxes.map((color, key) => {
                        return <ColoredBox 
                                    key={key} 
                                    index={key} 
                                    color={color} 
                                    deleteBox={this.deleteBox.bind(this)}></ColoredBox>
                    })}
                </div>
            </>
        );
    }
}

export default GridBox;
