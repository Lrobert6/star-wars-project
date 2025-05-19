import { useEffect, useState } from 'react';
import React from "react"
import {useNavigate} from 'react-router-dom';
import useSound from 'use-sound';
import Naboo from './img/naboo.png';
import Coruscant from './img/coruscant.png';
import Mandalore from './img/mandalore.png';
import HoverSoundEffect from'./sfx/hover-sound-effect.mp3';

const Home = () => {
    const soundUrl = HoverSoundEffect;
    const [play] = useSound(soundUrl);
    const navigate = useNavigate();

    return (
        <div className='background'>
            <div style={{textAlign: 'center'}}>
                <img src={Mandalore} onMouseEnter={play} className='planet-image' style={{width: '20vw'}} alt='Mandalore'/>
                <h2 className='planet-text'>Mandalore</h2>
            </div>
            <div style={{textAlign: 'center'}}>
                <img src={Naboo} onMouseEnter={play} onClick={()=> navigate('/naboo')} className='planet-image' style={{width: '20vw'}} alt='Naboo'/>
                <h2 className='planet-text'>Naboo</h2>
            </div>
            <div style={{textAlign: 'center'}}>
                <img src={Coruscant} onMouseEnter={play} className='planet-image' style={{width: '20vw'}} alt='Coruscant'/>
                <h2 className='planet-text'>Coruscant</h2>
            </div>
        </div>
    )
}

export default Home;