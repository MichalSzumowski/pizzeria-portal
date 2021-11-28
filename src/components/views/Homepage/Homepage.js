import React from 'react';
import styles from './Homepage.module.scss';
import { Link } from 'react-router-dom';
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

const demoList = [
  {
    table: '1',
    time: '10:20',
    people: '4',
    details: '1',
  },
  {
    table: '2',
    time: '17:40',
    people: '2',
    details: '9',
  },
  {
    table: '1',
    time: '21:30',
    people: '3',
    details: '1',
  },
  {
    table: '2',
    time: '09:50',
    people: '5',
    details: '9',
  },
];

const Homepage = () => (
  <Container className={styles.component} component="main" maxWidth="lg">
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h5" component="h5">
          Schedule of events and reservations
          </Typography>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoList.map((demoList) => (
            <TableRow key={demoList.table}>
              <TableCell component="th" scope="row">
                {demoList.table}
              </TableCell>
              <TableCell>{demoList.time}</TableCell>
              <TableCell>{demoList.people}</TableCell>
              <TableCell>
                <Button
                  className={styles.booked}
                  component={Link}
                  to={`${process.env.PUBLIC_URL}/tables/booking/${demoList.details}`}
                  color='secondary'>
                see details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </Container>
);

export default Homepage; 