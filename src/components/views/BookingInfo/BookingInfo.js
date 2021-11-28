import React from 'react';
import styles from './BookingInfo.module.scss';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import RestaurantIcon from '@material-ui/icons/Restaurant';

const demoBooking = [
  {
    date: '2021-11-27',
    time: '21:00',
    table: '1',
    name: 'Damian',
    contact: 'przykładowyemail@email.com',
    people: '3',
  },
];

const BookingInfo = () => {
  const { id } = useParams();
  return (
    <Paper className={styles.component} elevation={9}>
      <Grid container justify="space-around">
        <Grid item xs={3}>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter`}>
            <RestaurantIcon />
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Typography className={styles.title} variant="h5" component="h5">
            Booking {id}
          </Typography>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>People</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoBooking.map((booking) => (
            <TableRow key={booking}>
              <TableCell component="th" scope="row">
                {booking.date}
              </TableCell>
              <TableCell> {booking.time}</TableCell>
              <TableCell> {booking.table}</TableCell>
              <TableCell> {booking.name}</TableCell>
              <TableCell> {booking.contact}</TableCell>
              <TableCell> {booking.people}</TableCell>
            </TableRow>
          ))}  
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BookingInfo;