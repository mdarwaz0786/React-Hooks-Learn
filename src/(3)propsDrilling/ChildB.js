import React from 'react';
import ChildC from './ChildC.js';

const ChildB = (props) => {
    return (
        <div>
            <p>ChildB</p>
            <ChildC name={props.name} age={props.age} />
        </div>
    );
};

export default ChildB;