import React from 'react'
import './Login.css'
import {
  Container,
  Button,
  TextField,
  Paper
} from '@material-ui/core'

import Auth from './Auth'

export default function Login(){

  const [user,setUser] = React.useState([]);

  function userAuth(e){
    console.log(e.currentTarget.value)
  }

  return(
    <>
      <Container maxWidth="xs" className="container">
        <Paper elevation={2} className="paper" >
          <p className="title">Login</p>
          <hr/>
          <div className="form">
            <form autoComplete="off">
              <TextField 
                label="Usuário"
                variant="outlined"
                color="primary"
                fullWidth
                className="input"
                style={
                  {
                    marginBottom:25, 
                    marginTop: 15
                  }
                }
              />
              <TextField 
                label="Senha"
                variant="outlined"
                color="primary"
                type="password"
                fullWidth
                style={
                  {
                    marginBottom:20
                  }
                }
              />
              <Button
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                style={
                  {
                    marginTop:5, 
                    marginBottom:15, 
                    fontSize:16, 
                    padding: 10
                  }
                }
                onClick={
                  (e) => { 
                    e.preventDefault(); 
                    userAuth(e)
                  } 
                }
              >
                Entrar
              </Button>
            </form>
          </div>
        </Paper>
      </Container>
    </>
  )
}