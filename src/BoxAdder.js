import * as React from 'react';
import './BoxAdder.css';

class BoxAdder extends React.Component {
    constructor(props) {
        super(props);

        this.inputField = React.createRef();
    }

    addHexColor() {
        let value = this.inputField.current.value;
        if(!/[0-9A-Fa-f]{6}/g.test(value)) {
            alert("Please enter a valid hexadecimal value with 6 digits");
            return;
        }
        this.inputField.current.value = "";
        this.props.addHexBox(value);
    }

    render() {
        return (
            <div className="form-container">
                <label>Hex Color</label>
                <input placeholder="Hex Color" ref={this.inputField}></input>
                <button onClick={this.addHexColor.bind(this)}>Add Box</button>
            </div>
        );
    }
}

export default BoxAdder;
