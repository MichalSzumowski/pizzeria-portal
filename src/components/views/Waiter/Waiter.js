import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'free', order: null},
  {id: '3', status: 'ordered', order: 123},
  {id: '4', status: 'prepared', order: 234},
  {id: '5', status: 'delivered', order: 345},
  {id: '6', status: 'paid', order: 456},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <Button
          color={'secondary'}
          component={Link} 
          to={process.env.PUBLIC_URL + '/waiter/order/new'}>
            new order</Button>
      );
    case 'ordered':
      return (
        <Button>ordered</Button>
      );
    case 'paid':
      return (
        <Button>paid</Button>
      );
    case 'prepared':
      return (
        <Button>prepared</Button>
      );
    case 'delivered':
      return (
        <Button>delivered</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Container className={styles.component} component="main" maxWidth="lg">
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="center">
        <Grid item>
          <Typography className={styles.title} variant="h5" component="h5">
          Waiter View
          </Typography>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);

export default Waiter;