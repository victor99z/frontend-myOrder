import React from 'react'
import './Style.css'
import { Typography, Toolbar, AppBar, Tab, Tabs, Container} from '@material-ui/core/'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

export default function NavBar(){

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <AppBar position="static" >
      <Toolbar className="title-navbar"> 
        <Typography variant="h2" color="initial" >
          <RestaurantMenuIcon fontSize="large"/>
        </Typography>
      </Toolbar>
      <Container maxWidth="md">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="action tabs"
        >
          <Tab label="Home" />
          <Tab label="Restaurantes"  />
          <Tab label="Usuários"  />
          <Tab label="Pedidos" />
        </Tabs>
      </Container>
    </AppBar>
    </>
  );
}
