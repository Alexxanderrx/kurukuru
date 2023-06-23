import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import React from 'react'

import './App.css'
import kurusound01 from "./assets/kurukuru.ogg"
import kurusound02 from "./assets/kururin.ogg"
import hgif01 from "./assets/hertaa1.gif"
import hgif02 from "./assets/hertaa2.gif"
import ReactHowler from 'react-howler'

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);
  // useEffect(() =>
  let sound;
  let kurugif;
  function changeState() {
    state == false ? setState(!state) : setState(!state);
  }
  state == false ? kurugif = hgif01 : kurugif = hgif02;
  function plusCount() {
    setCount((count) => count + 1);
  }
  function playFunct() {
    // sound.play();
    changeState();
    plusCount();
    // MyComponent();
  }
  state == true ? sound = kurusound01 : sound = kurusound02;
  // console.log(kurugif);
  // console.log(state);
  // console.log(sound);


  function MyComponent() {
    const animacion = useSpring({
      from: { x: "-500px", opacity: 1 },
      to: { x: "2000px", opacity: 0 },
      config: {
        mass: 1,
        friction: 120,
        tension: 120,
      },
    })

    return <animated.img style={animacion} className='kuru_img' src={kurugif} alt='hertaa1' />
  }

  // function kuruAlert() {
  //   sound.play();
  // }

  return (
    <div id='fondo'>
      <ReactHowler
        src={sound}
        playing={true} />
      {/* <audio controls="controls" autoplay="autoplay">
        <source src={kuruAlert} type="audio/ogg" />
      </audio> */}
      <div id='box_00'>
        <h1 style={{ fontSize: "50px" }}>Welcome to herta kuru</h1>
        <div className="card">
          <h3>The website for Herta, the <del>annoying</del> cutest genius Honkai: Star Rail character from  out there.</h3>
          <h4>The kuru~ has been squished</h4>
          <h1 placeholder='0'>{count}</h1>
          <h4>times</h4>
          {/* onClick={playFunct} */}
          <button id="kuru_btn" onClick={playFunct}>
            Squish the kuru~!
          </button>
        </div>
      </div>

      <MyComponent />
      <h6>by Alexxanderrx</h6>
    </div>
  )
}

export default App
