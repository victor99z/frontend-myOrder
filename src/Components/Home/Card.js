import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import './Card.css';

const Card = () => {
  return(
    <>
      <Paper elevation={2} className="paper-home">
        <div className="container-paper">
          <Typography variant="h5" component="h3" align="center">
            Bem vindo ao <strong>MyOrder</strong> restaurante.
          </Typography>
          <Typography variant="body1" align="left" className="typo-sub">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </Typography>
          </div>
      </Paper>
      <Paper elevation={2} className="paper-home">
      <div className="container-paper">
        <Typography variant="body1" align="left" className="typo-header">
          Github: <a href="https://github.com/jubileu99/" target="blank">Jubileu99 </a>
        </Typography>
        </div>
    </Paper>
  </>
  )
}

export default Card;