import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
        const [val, setVal] = useState()

        const submitHandler = () => {
            setVal("React");
        }
        const takeInput1 = () => {
            setVal("Angular");
        }
    const takeInput2 = () => {
        setVal("Node");
    }
    useEffect(() => {
        takeInput1()
    }, []);
  return (
      <div>
          <Typography variant='h4'>Welcome {val}</Typography>
          <Button variant="contained" onClick={submitHandler}>React</Button> &nbsp;
          <Button variant="contained" onClick={takeInput1}>Angular</Button>&nbsp;
          <Button variant="contained" onClick={takeInput2}>Node</Button>&nbsp;

    </div>
  )
}

export default Welcome