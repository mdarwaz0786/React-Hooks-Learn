import React from 'react';
import ChildY from './ChildY.js';

const ChildX = () => {
    return (
        <div>
            <p>ChildX</p>
            <ChildY />
        </div>
    );
};

export default ChildX;