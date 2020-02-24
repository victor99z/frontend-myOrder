import React from 'react';
import Container from '@material-ui/core/Container'
import TableView from '../../Components/TableView/Index'
import './App.css';

export default function ListAllRestaurants({ product }){
  return (
    <Container maxWidth="md" className="container">
      <TableView items={product}/>
    </Container>
  );
}