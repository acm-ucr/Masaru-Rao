import { MdMail } from "react-icons/md";

const Landing = () => {
  return (
    <div className="flex bg-gradient-to-b from-rao-gray to-rao-black">
      <div>
        <div className="font-poppins text-5xl font-extralight text-rao-yellow">
          Welcome To
        </div>
        <div>Biomedical Microdevices Laboratory</div>
        <div className="font-poppins font-extralight text-rao-blue">
          University of California, Riverside
        </div>
        <div className="font-poppins font-extralight">
          Within the BML, we seek to develop fundamentally enabling MEMS-based
          process technologies, devices, and instruments that address critical
          needs in public health and facilitate the advancement of understanding
          in areas of medical relevance. We invite you to peruse our site and
          welcome further inquiries.
        </div>
        <div className="text-rao-yellow">
          <div>Masaru (Masa) Rao</div>

          <div>Principal Investigator </div>

          <div className="flex items-center">
            <MdMail className="text-rao-yellow" />
            <div className="text-white">masaru.rao@ucr.edu</div>
          </div>
        </div>
      </div>
      <div>image</div>
    </div>
  );
};

export default Landing;
