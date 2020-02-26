import React, {useEffect,useState}  from 'react'
import {
  TableContainer,
  Table,
  TableHead, 
  TableBody, 
  TableCell,
  TableRow, 
  Paper, 
  IconButton, 
  Tooltip
} from '@material-ui/core/'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import api from '../../../services/api'

export default function TableView(){

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
    <TableContainer component={Paper} >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center" size="small">#</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map( item => (
            <TableRow key={item.id}>
              <TableCell component="th" align="center">{item.id}</TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.phone}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">
              <Tooltip title="Remover">
                <IconButton aria-label="delete" onClick={ () => {} } > { /* onClick={ () => deleteRestaurant(item.id)} */}
                  <DeleteIcon color="secondary"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Editar">
                <IconButton aria-label="editar" onClick={ () => {} } > { /* onClick={ () => updateRestaurant(item.id)} */ }
                  <EditIcon color="primary" />
                </IconButton>
              </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  )
}