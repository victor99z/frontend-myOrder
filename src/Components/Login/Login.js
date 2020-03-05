import React from 'react'
import './Login.css'
import {
  Container,
  Button,
  TextField,
  Paper
} from '@material-ui/core'
import Api from '../../services/Api'


export default function Login(){

  const [username,setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  async function Auth(event){
    event.preventDefault()
    
    try{
      const response = Api.post("/auth/login", {username, password})
      if((await response).status === 200){
        alert("Usuário logado")
      }
    }catch(e){
      alert(e)
    }
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
                onChange={ e => setUsername(e.target.value) }
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
                onChange={ e => setPassword(e.target.value) }
              />
              <Button
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth
                onClick={ e => { Auth(e) } } 
                style={
                  {
                    marginTop:5, 
                    marginBottom:15, 
                    fontSize:16, 
                    padding: 10
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