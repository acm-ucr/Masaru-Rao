import { Event } from "react-big-calendar";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
  DOMNode,
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
  console.log("event", event);
  console.log("desc", extractLink(event.description?.toLocaleString()));

  const parserOptions: HTMLReactParserOptions = {
    replace: (domNode) => {
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
            {domToReact(
              domNode.children as unknown as DOMNode[],
              parserOptions,
            )}
          </a>
        );
      }
    },
  };

  return (
    <div className="z-10 w-fit flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">
      <div className="text-gray-500">{event.start?.toLocaleDateString()}</div>
      <div className="p-2" />
      <div className="text-rao-black">
        <div className="break-words">
          {parse(event.description?.toLocaleString() || "", parserOptions)}
        </div>
      </div>

      <div className="p-1" />
      <div className="w-full border border-rao-yellow"></div>
      <div className="p-2" />
    </div>
  );
};

export default EventCard;
