import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import './App.css'

const Card = () => {
  return(
    <Paper elevation={2} className="paper-home">
      <div className="container-paper">
        <Typography variant="h5" component="h3" align="center">
          Bem vindo ao <strong>MyOrder</strong> restaurante.
        </Typography>
      </div>
    </Paper>
  )
}

export default Card;