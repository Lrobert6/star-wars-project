import { useEffect, useState } from 'react';
import React from "react"
import {useNavigate} from 'react-router-dom';

const Naboo = () => {
    const navigate = useNavigate();

    return (
        <div className='background'>
            <h1 style={{position: 'absolute', top: '0', left: '0', marginTop: '1rem', marginLeft: '1rem'}} onClick={()=> navigate('/')}>Home</h1>
            <h1>Naboo</h1>
        </div>
    )
}

export default Naboo;