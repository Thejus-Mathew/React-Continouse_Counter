import React, { useEffect, useState } from 'react'
import "./Counter.css"
import { Button } from '@mui/material'

function Counter() {
    const[counter,setCounter] = useState(0)
    const[loop,setLoop] = useState(true)
    const[button,setButton] = useState("Pause")


    useEffect(() => {
      let inter
        if(loop){
          
            inter = setInterval(() => {
            setCounter((last) => last+1);
        }, 1000);
        }else{
            clearInterval(inter);
        }
        return () => clearInterval(inter);
    });

    function stops() {
      if(loop) {
        setLoop(false)
        setButton("Resume")
      }
      else{
        setLoop(true)
        setButton("Pause")
      }
    }
    function resets() {
      setCounter(0)
      setLoop(true)
      if (button == "Resume") {
        setButton("Pause")
      }
    }

  return (
    <div>
      <div className="container-fluids">
        <div className="content">
            <h1 className='text-center p-3'>COUNTER</h1>
            <h2>{counter}</h2>
            <div className="buttons text-center">
                <Button className='m-3' onClick={stops} color="error" variant="outlined">{button}</Button>
                <Button className='m-3' onClick={resets} variant="outlined">Reset</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
