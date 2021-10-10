import './Box.css';
import { useState } from 'react';

function Box({ enabled }) {
    const [background, setBackground] = useState({
        background: `rgba(200, 250, 150, 50%)`,
    })
    function computeColor(e) {
        if (!enabled) {
            return;
        }
        const xFraction = e.clientX / e.target.clientWidth;
        const yFraction = e.clientY / e.target.clientHeight;
        setBackground({
            background: 
                `rgba(${Math.floor(xFraction * 250)}, ${Math.floor(yFraction * 250)}, 0, 50%)`,
        })
    }
    return (
        <div className="box" style={background} onMouseMove={computeColor} />
    );
}

export default Box;