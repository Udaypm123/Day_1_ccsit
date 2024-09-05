import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">my App</Typography> &nbsp;
                  <Link to='/'>
                      <Button variant="contained" color="secondary"> SIGNUP</Button>
                  </Link>
                  &nbsp;
                  <Link to='/login'>
                     <Button variant="contained" color="secondary"> LOGIN</Button>
                  </Link>
                  &nbsp;
                  <Link to='/s'>
                      <Button variant="contained" color="secondary"> STATE</Button>
                  </Link>
                  &nbsp;
                  <Link to='/c'>
                      <Button variant="contained" color="secondary"> COUNT</Button>
                  </Link>
                  &nbsp;
                  <Link to='/w'>
                      <Button variant="contained" color="secondary"> WELCOME</Button>
                  </Link>
                  &nbsp;
                  <Link to='/ap'>
                      <Button variant="contained" color="secondary">Api_JSON</Button>
                  </Link>
                  &nbsp;
                  <Link to='/p'>
                      <Button variant="contained" color="secondary">Pokemon</Button>
                  </Link>
                  &nbsp;


              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar