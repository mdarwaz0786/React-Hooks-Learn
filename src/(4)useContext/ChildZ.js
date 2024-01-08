import React, { useContext } from 'react';
import { data } from '../App.js';

const ChildZ = () => {
    const { name, age } = useContext(data);

    return (
        <div>
            <p>ChildZ return my name is {name} and my age is {age}.</p>
        </div>
    );
};

export default ChildZ;