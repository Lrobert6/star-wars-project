import { useEffect, useState } from 'react';
import React from "react"
import {useNavigate} from 'react-router-dom';
import useSound from 'use-sound';
import Naboo from './img/naboo.png';
import HoverSoundEffect from'./sfx/hover-sound-effect.mp3';

const Home = () => {
    const soundUrl = HoverSoundEffect;
    const [play] = useSound(soundUrl);

    return (
        <div>
            <img src={Naboo} onMouseEnter={play} className='planet-image' style={{width: '15%'}} alt='Naboo'/>
        </div>
    )
}

export default Home;