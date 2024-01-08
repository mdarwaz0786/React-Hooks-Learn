import React from 'react';
import ChildB from './ChildB.js';

const ChildA = (props) => {
    return (
        <div>
            <p>ChildA</p>
            <ChildB name={props.name} age={props.age} />
        </div>
    );
};

export default ChildA;