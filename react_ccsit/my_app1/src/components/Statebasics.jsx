import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"

const Statebasics = () => {
    var [fname, setFname] = useState('UDAY')
    var[val, setVal] = useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
    const submitHandler = () => {
        console.log("Clicked");
        setVal(fname);
    }
        
        return (
          <div>
                  <Typography variant='h4'>Welcome {val} </Typography>
                <TextField variant="outlined" label="Type your name" onChange={handleInput} />
                <Button variant="contained"  onClick={submitHandler}> Submit</Button>
          </div>
          )
}

export default Statebasics