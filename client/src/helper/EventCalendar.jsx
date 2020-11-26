import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip
} from '@devexpress/dx-react-scheduler-material-ui';
import axios from 'axios';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get('/events', { withCredentials: true })
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setEvents]);
  console.log(events);

  return (
    <div>
      <Paper>
        <Scheduler data={events}>
          <ViewState />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <AppointmentTooltip showCloseButton />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default EventCalendar;
