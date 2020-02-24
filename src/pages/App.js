import React, { useState, useEffect} from 'react';
import api from '../services/api'

import NavBar from '../Components/NavBar'
import ListAllRestaurants from './restaurant/List'

function App(){

  const [product, setProducs] = useState([])

  useEffect(() => {
    async function loadProducts(){
      const response = await api.get('/restaurant/list')
      setProducs(response.data)
    }
    loadProducts()
  }, []);

  return (
    <>
    <NavBar/>
    <ListAllRestaurants product={product}/>
    </>
  );
}

export default App;
