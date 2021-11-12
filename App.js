import React,{useEffect,useState} from 'react';
import { Redirect } from "react-router-dom";
import styles from  './App.module.css';
import Particles from "react-tsparticles";
import Typewriter from 'typewriter-effect';
import { io } from "socket.io-client";
let socket = io("https://localhost:5000/chat");

function App() {
  const [redirect,updateRedirect]=useState(false);
  const [data,updateData]=useState(false);

  useEffect(()=>{
    socket.on('recievefront',(socket)=>{
      updateRedirect(socket.payload);
    })

  })
  return (
    <div>
    <div>
    <Particles
    id="tsparticles"
    width="100vw"
    height="100vh"

    options={{
      background: {
        color: {
          value: "#142d4c",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 1,
            opacity: 0.4,
            size: 10,
          },
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ec7263",
        },
        links: {
          color: "#ec7263",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          random: true,
          value: 3,
        },
      },
      detectRetina: true,
    }}
  />
  </div>
  <div className={styles.contentOuter}>
  <div className={styles.inner}>
  <Typewriter
  options={{
    strings: ['Namaste', 'India!'],
    autoStart: true,
    wrapperClassName:styles.innerText,
    loop: true,
  }}
/>
<Typewriter
options={{
  strings: ['Welcome to Digital Advertising!','In One Click, Reach Everywhere','Download Application','Upload Media','And Go live!'],
  autoStart: true,
  wrapperClassName:styles.innerTextWelcome,
  loop: true,
}}
/>
{redirect===true?<Redirect to={{
    pathname: "/carousel",
    state: { imageUrl: data }
  }} />:null}

  </div>
  </div>
    </div>
  );
}

export default App;
