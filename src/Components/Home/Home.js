import React from 'react'
import { Container } from '@material-ui/core'
import Card from './Card'

export default function Home(){
    return(
      <>
        <Container maxWidth="md">
          <Card/>
        </Container>
      </>
    )
 }