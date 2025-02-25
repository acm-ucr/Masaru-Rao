"use client";

import EventCard from "./EventCard";
import { Event } from "react-big-calendar";
import axios from "axios";
import { useEffect, useState } from "react";

interface GoogleEvent {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  description: string;
}

interface EventWithDescription extends Event {
  description: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventWithDescription[]>([]);

  const getUpcomingEvents = (events: EventWithDescription[]) => {
    return events.sort((a, b) => {
      if (!a.start || !b.start) return 0;
      return new Date(b.start).getTime() - new Date(a.start).getTime();
    });
  };

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_CALENDAR_ID
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=starttime`,
      )
      .then((result) => {
        console.log(result);
        setEvents(
          result.data.items.map(
            (item: GoogleEvent): EventWithDescription => ({
              start: new Date(item.start.dateTime),
              end: new Date(item.end.dateTime),
              title: item.summary,
              description: item.description,
            }),
          ),
        );
      });
  }, []);

  const upcomingEvents = getUpcomingEvents(events);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-2/3">
        <div className="flex w-4/12 flex-col">
          <div className="font-anta text-5xl text-black">News & Events</div>
          <hr className="w-full border-2 border-rao-yellow" />
        </div>
        <div className="mt-10 flex w-1/4 flex-col gap-10">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
