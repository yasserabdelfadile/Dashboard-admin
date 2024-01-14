// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Paper, Stack } from "@mui/material";
import "./calendar.css";
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

const calendar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [weekendsVisible, setweekendsVisible] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentEvents, setcurrentEvents] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const handleWeekendsToggle = () => {
    setweekendsVisible(!weekendsVisible);
  };
  let eventGuid = 0;

  function createEventId() {
    return String(eventGuid++);
  }
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setcurrentEvents(events);
  };

  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "All-day event",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Timed event",
      start: todayStr + "T12:00:00",
    },
  ];

  return (
    <Stack direction={"row"}>
      <Paper className="demo-app-sidebar">
        {/* ==================================================== */}
        {/* this code for button to delete holyday from calender */}
        {/* ==================================================== */}

        {/* <div className="demo-app-sidebar-section">
          <label>
            <input
              type="checkbox"
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div> */}
        {/* <div className="demo-app-sidebar-section"> */}
        <h2 style={{ textAlign: "center" }}>
          All Events ({currentEvents.length})
        </h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </div>
    </Stack>
  );
};
export default calendar;
