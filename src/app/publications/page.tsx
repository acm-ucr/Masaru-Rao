"use client";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/public/placeholder.png";
import backup_publications from "@/data/publicationData";
import Heading from "@/components/Heading";

export default function Publications() {
  return (
    <div className="p-8 text-white">
      <Heading name="Publications" />

      <div className="mb-6 flex flex-col items-center">
        <div className="mb-4 h-32 w-32 overflow-hidden rounded-full">
          <Image
            src={placeholder}
            alt={"Masaru P. Rao"}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-normal">{"Masaru P. Rao"}</h2>
          <p className="my-1 text-sm">
            {
              "University of California, Riverside | UCR - Department of Mechanical Engineering"
            }
          </p>
          <p className="my-1 text-sm">{"PhD, UCSB Materials"}</p>
        </div>
      </div>

      <div className="mb-8 flex justify-center">
        <Link
          href="https://scholar.google.com/citations?user=UPuVsU8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-gray-600 bg-rao-gray px-6 py-2 text-sm text-white transition-colors hover:bg-rao-gray"
        >
          Google Scholar
        </Link>
      </div>

      <div className="flex-1 px-20">
        <div className="flex">
          <div className="">
            <h2 className="mt-0 text-xl font-normal">Journal papers</h2>
            <hr className="border-1 border-rao-yellow bg-rao-yellow px-2" />
            <div className="p-1" />
          </div>
        </div>
        <ul className="m-0 list-none p-0">
          {backup_publications.map((pub, index) => (
            <li key={index} className="mb-6">
              <p className="my-1 text-sm">{pub.authors}</p>
              <div className="mb-1 block text-sm">{pub.title}</div>

              <p className="my-1 text-sm">
                <span className="text-rao-yellow">
                  {pub.type === "Journal" && pub.journal}
                </span>{" "}
                {pub.details}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
