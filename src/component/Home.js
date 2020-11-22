import React from 'react'

import Angka from '../component/Angka';
import Clock from '../component/Clock';
import Anggota from '../component/Anggota';
import './css/style.css';


const Home = () => {
    return <div className="wrapper">
        {
        <div>
         <Anggota/>
         <Angka/>
         <Clock/>
        </div>
        }
    </div>



}

export default Home;