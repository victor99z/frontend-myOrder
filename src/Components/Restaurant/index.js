import React from 'react';
import './components/App.css';

import Container from '@material-ui/core/Container'
import TableView from './components/Table'
import Card from './components/Card'

export default function Restaurants(){

  return (
    <Container maxWidth="md" className="container">
      <Card />
      <TableView />
    </Container>
  );
}