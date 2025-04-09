import Image from "next/image";
import arrow from "@/public/ucr-arrow.png";

interface HeadingProps {
  name: string;
}

const Heading = (prop: HeadingProps) => {
  return (
    <div className="mb-8 flex items-center">
      <Image src={arrow} alt="Blue and yellow arrow" className="" />

      <h1 className="m-0 font-anta text-4xl font-normal">{prop.name}</h1>
    </div>
  );
};

export default Heading;
