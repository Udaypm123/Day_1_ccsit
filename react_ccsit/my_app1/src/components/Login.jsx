import { TextField, Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1 align="center">Login Page</h1>
          <TextField label="Username" variant="filled"></TextField>
          <br></br>
          <br></br>
          <TextField label="Password" variant="filled" />
          <br></br>
          <br></br>
          <Button variant="contained">Login</Button>  <br />
    </div>
  )
}

export default Login