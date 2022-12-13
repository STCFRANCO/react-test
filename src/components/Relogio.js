import React from 'react';

export default function relogio(){
    return (
        <p>
            {new Date().toLocaleTimeString()}
        </p>
    )
} 