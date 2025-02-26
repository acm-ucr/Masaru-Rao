import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Event } from "react-big-calendar";
import Link from "next/link";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from "html-react-parser";

interface EventWithDescription extends Event {
  description: string;
}

interface EventCardProps {
  event: EventWithDescription;
}

const extractLink = (description: string | undefined): string | null => {
  if (!description) {
    return null;
  }
  const regex = /https:\/\/[^\s"]+/;
  const match = description.match(regex);
  return match ? match[0] : null;
};

const EventCard = ({ event }: EventCardProps) => {
  const [linkOrNot, setLinkOrNot] = useState<string | null>(null);
  console.log("event", event);
  console.log("desc", extractLink(event.description?.toLocaleString()));

  useEffect(() => {
    const link = extractLink(event.description);
    setLinkOrNot(link);
  }, [event.description]);

  // Options for html-react-parser to style links blue
  const parserOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
      // Check if the node is an element and is an anchor tag
      if (
        domNode instanceof Element &&
        domNode.name === "a" &&
        domNode.attribs.href
      ) {
        return (
          <a
            href={domNode.attribs.href}
            style={{ color: "blue" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {domToReact(domNode.children, parserOptions)}
          </a>
        );
      }
    },
  };

  return (
    <div className="z-10 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
      <div className="text-gray-500">{event.start?.toLocaleDateString()}</div>
      <div className="p-2" />
      {event.title === "Event" ? (
        <div className="text-rao-black">
          {parse(event.description?.toLocaleString() || "", parserOptions)}
        </div>
      ) : (
        <div className="text-rao-black">{event.title?.toLocaleString()}</div>
      )}
      <div className="p-1" />
      <div className="w-full border border-rao-yellow"></div>
      <div className="p-2" />
      {linkOrNot && event.title !== "Event" && (
        <Link href={linkOrNot}>
          <div className="flex items-center justify-end gap-1">
            <div className="font-bold text-rao-blue">read more</div>
            <FaArrowRight className="text-rao-blue" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default EventCard;
