import React from 'react'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './Style.css'
import {
  Typography,
  Toolbar,
  AppBar,
  Tab,
  Tabs,
  Container
} from '@material-ui/core/'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import Restaurant from '../Restaurant/index'
import Home from '../Home/Home'

export default function NavBar() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Router>
        <AppBar position="static" >
          <Toolbar className="title-navbar">
            <Typography variant="h2" color="initial" >
              <RestaurantMenuIcon fontSize="large" />
            </Typography>
          </Toolbar>
          <Container maxWidth="md" className="tab-container">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="action tabs"

            >
              <Tab label="Home" component={Link} to="/"/>
              <Tab label="Restaurantes" component={Link} to="/restaurant"/>
              <Tab label="Usuários" component={Link} to="/users"/>
              <Tab label="Pedidos" component={Link} to="/orders"/>
            </Tabs>
          </Container>
        </AppBar>
      
        <Switch >
          <Route path="/" exact component={Home}/>
          <Route path="/users"> <h1>root12</h1></Route>
          <Route path="/orders"> <h1>root3312</h1></Route>
          <Route path="/restaurant" component={Restaurant} />
        </Switch>

      </Router>
    </>
  );
}