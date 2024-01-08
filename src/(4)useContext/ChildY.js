import React from 'react';
import ChildZ from './ChildZ.js';

const ChildY = () => {
    return (
        <div>
            <p>ChildY</p>
            <ChildZ />
        </div>
    );
};

export default ChildY;