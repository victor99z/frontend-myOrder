import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Paper, InputBase, Grid, Button} from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './App.css'

const Card = () => {
  return (
    <Grid container spacing={1} alignItems="stretch">
      <Grid item xs={11}>
        <Paper elevation={2} className="paper-home" style={{ marginTop: -5}}>
          <div className="container-paper">
            <Grid container spacing={0}>
              <Grid item xs={0} className="icone-busca" >
                <SearchIcon />
              </Grid>
              <Grid item xs={11}>
                <InputBase
                  placeholder="Procurar restaurante…"
                  inputProps={{ 'aria-label': 'search' }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper elevation={2} >
            <Button color="primary">
               <AddCircleIcon fontSize="default"/>
            </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Card;