import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

var timer;

const FunctionalNav = () => {
    const [date, setDate] = useState(new Date().toTimeString());

    useEffect(() => {
        timer = window.setInterval(() => {
            setDate(new Date().toTimeString());
        }, 1000);

        return function cleanup() {
            window.clearInterval(timer);
        }
    }, []);

    return (
        <navbar>
            <div>{date}</div>
            <button><Link to="/">boxes</Link></button>
            <button><Link to="/about">about</Link></button>
        </navbar>
    );
}

export default FunctionalNav;
