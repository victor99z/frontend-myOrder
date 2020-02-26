import React from 'react'
import './Login.css'
import {
  Container,
  Button,
  TextField,
  Typography,
  Grid,
  Paper
} from '@material-ui/core'

export default function Login(){
  return(
    <Container maxWidth="xs" align="center" style={{marginTop: "15%"}}>
      <Paper>
      <Grid container spacing={3} className="container-login">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Autentição
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form autoComplete="off" className="form">
            <Grid item xs={12}>
              <TextField 
                label="Usuário" 
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                label="Usuário" 
                variant="outlined"
                color="primary"
              />
            </Grid>

            <Grid item xs="12" spacing={2}>
              <Button variant="contained" color="primary">
                Entrar
              </Button>
              <Button variant="contained" color="secondary">
                Recuperar senha
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      </Paper>
    </Container>
  )
}
