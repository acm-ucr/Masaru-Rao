"use client";
import { members, alumni, undergrads } from "@/data/memberData";

import Heading from "@/components/Heading";
import SubHeading from "@/components/members/SubHeading";
import Member from "@/components/members/Member";
import { useState } from "react";
import { ProfCard } from "@/components/members/ProfCard";

export default function Publications() {
  const [postdocsOpen, setPostdocsOpen] = useState(true);
  const [undergradsOpen, setUndergradsOpen] = useState(true);
  const [biosketchOpen, setBiosketchOpen] = useState(false);
  return (
    <div className="p-8 text-white">
      <Heading name="Members" />
      <div className="flex justify-center">
        <div className="md:w-11/12">
          <SubHeading name="Principal Investigator" />
          <div className="m-4" />
          <ProfCard />
          <div className="m-4" />
          <div className="overflow-hidden rounded-lg border">
            <button
              className="flex w-full items-center justify-between p-2 transition-colors"
              onClick={() => setBiosketchOpen(!biosketchOpen)}
            >
              <h3 className="text-lg font-semibold">
                Professor Rao's Biosketch
              </h3>
              <svg
                className={`h-5 w-5 transform transition-transform ${biosketchOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {biosketchOpen && (
              <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-white">
                <p>
                  Prof. Rao received his B.S. in Material Science & Engineering
                  from the University of Florida with specialization in
                  metallurgy. He received his Ph.D. in Materials Engineering
                  from the University of California, Santa Barbara (UCSB), under
                  the supervision of Prof. Fred Lange in the area of structural
                  ceramics. Following graduation, he accepted a postdoctoral
                  researcher position in Prof. Noel MacDonald's group in the
                  Mechanical Engineering Department at UCSB, where he was an
                  integral member of the team that developed plasma-based
                  micromachining techniques that allow, for the first time, deep
                  reactive ion etching of bulk titanium (Ti DRIE).
                </p>
                <p>
                  He joined Purdue University as an Assistant Professor in the
                  Schools of Mechanical Engineering and Materials Engineering
                  (by courtesy) in 2007. He moved to the Department of
                  Mechanical Engineering at the University of California,
                  Riverside (UCR) in 2009. Prof. Rao is also a Core Faculty
                  Member in the interdisciplinary Materials Science &
                  Engineering Program, and a Participating Faculty member in the
                  Department of Bioengineering.
                </p>
                <p>
                  Prof. Rao's research interests lie in the development of
                  fundamentally enabling MicroElectroMechanical Systems (MEMS)
                  based process technologies, devices, and instruments that
                  address critical needs in public health and facilitate the
                  advancement of understanding in areas of medical relevance.
                  Current efforts primarily focus on development of biomedical
                  microdevices for applications including vascular intervention,
                  minimally-invasive drug delivery, neuroprostheses, and
                  ultrahigh throughput cellular manipulation.
                </p>
                <p>
                  He has authored/co-authored over 40 journal articles and
                  conference proceedings, has 3 awarded and 6 pending patents,
                  and has presented invited lectures in fields ranging from
                  ceramic composites to MEMS. Prof. Rao is a recipient of the
                  NSF CAREER Award (2013) and is a member of the ASME MEMS
                  Division, Biomedical Engineering Society, Materials Research
                  Society, IEEE Engineering in Medicine & Biology Society, and
                  the IEEE Electron Devices Society.
                </p>
                <p>
                  Prof. Rao's research is funded by a variety of federal
                  agencies (NIH, NSF, & DoD), as well as industrial and internal
                  sponsors.
                </p>
                <div className="m-2" />
              </div>
            )}
          </div>
          <div className="m-8" />
          <SubHeading name="Current Members" />
          <div className="m-4" />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {members.map((member, index) => (
              <Member
                key={index}
                name={member.name}
                title={member.title}
                email={member.email}
                image={member.image}
              />
            ))}
          </div>
          <div className="m-8" />
          <SubHeading name="Alumni" />
          <div className="m-4" />
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-lg border">
              <button
                className="flex w-full items-center justify-between p-2 transition-colors"
                onClick={() => setPostdocsOpen(!postdocsOpen)}
              >
                <h3 className="text-md font-semibold">
                  Postdocs & Graduate Students
                </h3>
                <svg
                  className={`h-5 w-5 transform transition-transform ${postdocsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {postdocsOpen && (
                <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
                  {alumni.map((alum, index) => (
                    <Member
                      key={index}
                      name={alum.name}
                      title={alum.title}
                      email={alum.email}
                      image={alum.image}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-lg border">
              <button
                className="flex w-full items-center justify-between p-2 transition-colors"
                onClick={() => setUndergradsOpen(!undergradsOpen)}
              >
                <h3 className="text-md font-semibold">
                  Undergraduate Students
                </h3>
                <svg
                  className={`h-5 w-5 transform transition-transform ${postdocsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {undergradsOpen && (
                <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-4">
                  {undergrads.map((alum, index) => (
                    <Member
                      key={index}
                      name={alum.name}
                      title={alum.title}
                      email={alum.email}
                      image={alum.image}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
