import React from 'react'
import { Paper, InputBase, Grid,Tooltip, Button} from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import './App.css'

const Card = () => {
  return (
    <Grid container spacing={1} alignItems="stretch" >
      <Grid item sm={11} xs={9}>
        <Paper elevation={2} className="paper-home">
          <div className="container-paper">
            <Grid container spacing={1}>
              <Grid item className="icone-busca" >
                <SearchIcon />
              </Grid>
              <Grid item xs={10}>
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
      <Grid item sm={1} xs={3}>
        <Paper elevation={2} className="paper-home" style={{height: 62}}>
          <Tooltip title="Adicionar">
            <Button style={{width: "100%",height: "100%"}}>
              <AddCircleIcon color="primary"/>
            </Button>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Card;