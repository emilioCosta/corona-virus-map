import React, { useEffect, useState } from 'react';
import { getLastBrazilStatus } from '../services/covid';

const Map = () => {
    const [content, setContent] = useState('');
    useEffect(() => {
        getLastBrazilStatus().then(response => {
            console.log('a');
            setContent(response);
        });
    }, []);
    return <div>{content}</div>
};

export default Map;