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
  const [archiveClicked, setArchiveClicked] = useState(false);

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
  console.log("upcomingEvents", events.length);

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="w-2/3">
        <div className="flex w-4/12 flex-col">
          <div className="font-anta text-5xl text-black">News & Events</div>
          <hr className="w-full border-2 border-rao-yellow" />
        </div>
        {events.length > 0 && events.length < 12 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {Array.from({ length: 3 }, (_, colIndex) => (
              <div key={colIndex} className="flex flex-1 flex-col gap-3">
                {upcomingEvents
                  .filter((_, index) => index % 3 === colIndex)
                  .map((event, index) => (
                    <EventCard key={index} event={event} />
                  ))}
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }, (_, colIndex) => (
                <div key={colIndex} className="flex flex-1 flex-col gap-3">
                  {archiveClicked
                    ? upcomingEvents
                        .filter((_, index) => index % 3 === colIndex)
                        .map((event, index) => (
                          <EventCard key={index} event={event} />
                        ))
                    : upcomingEvents
                        .slice(0, 12) // Limit the events to a maximum of 12
                        .filter((_, index) => index % 3 === colIndex)
                        .map((event, index) => (
                          <EventCard key={index} event={event} />
                        ))}
                </div>
              ))}
            </div>
            {!archiveClicked && (
              <div className="flex justify-center">
                <button
                  onClick={() => setArchiveClicked(true)}
                  className="flex items-center justify-center rounded-md border border-black px-6 py-2 text-lg font-normal text-black transition-colors hover:bg-gray-100"
                >
                  Archive...
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
