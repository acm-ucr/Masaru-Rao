import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { MdMail, MdPhone } from "react-icons/md";
import placeholder from "@/public/placeholder.png";

export const ProfCard = () => {
  return (
    <div className="mx-8">
      <div className="flex gap-5">
        <div className="mb-4 h-32 w-32 min-w-fit overflow-hidden rounded-full">
          <Image
            src={placeholder}
            alt={"Masaru P. Rao"}
            width={128}
            height={128}
            className="h-full w-full min-w-full object-cover"
          />
        </div>
        <div>
          <div className="text-2xl font-bold">Masaru P. Rao</div>
          <div className="text-md text-[#316BCA]">Associate Professor</div>
          <div className="text-md">Department of Mechanical Engineering</div>
          <div>Department of Bioengineering (Participating Faculty)</div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <MdPhone className="text-rao-yellow" />
              <div className="text-xs">(951) 827-5870</div>
            </div>
            <Link href={`mailto:masaru.rao@ucr.edu`} className="flex gap-1">
              <MdMail className="self-center text-rao-yellow" />
              <div className="text-xs">masaru.rao@ucr.edu</div>
            </Link>
            <Link
              href={`https://www.linkedin.com/in/masa-rao-7070391`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1"
            >
              <FaLinkedin className="self-center text-rao-yellow" />
              <div className="self-center text-xs">Masa Rao</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
