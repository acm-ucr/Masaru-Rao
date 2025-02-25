import Image from "next/image";
import Link from "next/link";
import { MdMail, MdLocationPin } from "react-icons/md";
import homeImage from "@/public/home.png";

const Landing = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-rao-gray to-rao-black">
      <div className="flex w-3/5 flex-col gap-3 pl-10">
        <div className="font-poppins text-5xl font-extralight text-rao-yellow">
          Welcome To
        </div>
        <div className="font-anta text-6xl">
          Biomedical Microdevices Laboratory
        </div>
        <div className="flex items-center">
          <MdLocationPin className="ml-2 text-[#3399ff]" />
          <div className="font-poppins text-2xl font-extralight text-[#3399ff]">
            University of California, Riverside
          </div>
        </div>
        <div className="font-poppins text-2xl font-extralight">
          Within the BML, we seek to develop fundamentally enabling MEMS-based
          process technologies, devices, and instruments that address critical
          needs in public health and facilitate the advancement of understanding
          in areas of medical relevance. We invite you to peruse our site and
          welcome further inquiries.
        </div>
        <div className="text-rao-yellow">
          <div>Masaru (Masa) Rao</div>

          <div>Principal Investigator </div>
          <Link href="mailto:masaru.rao@ucr.edu" className="text-white">
            <div className="flex items-center gap-1">
              <MdMail className="text-rao-yellow" />
              <div className="text-white">masaru.rao@ucr.edu</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-1/3 p-5">
        <Image
          src={homeImage}
          alt="Biomedical Microdevices Laboratory"
          layout="responsive"
          width={700}
          height={475}
        />
      </div>
    </div>
  );
};

export default Landing;
