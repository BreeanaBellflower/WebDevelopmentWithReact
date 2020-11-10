import * as React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <navbar>
                <button><Link to="/">boxes</Link></button>
                <button><Link to="/about">about</Link></button>
            </navbar>
        );
    }
}

export default Nav;
