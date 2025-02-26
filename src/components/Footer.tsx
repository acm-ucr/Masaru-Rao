import Image from "next/image";
import ucr from "../../public/ucr-logo.png";

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-rao-black">
      <div className="w-full border-4 border-rao-yellow" />
      <div className="flex flex-col items-center justify-center gap-5">
        <Image src={ucr} draggable={false} alt="Home" />
        <div className="text-[#787878]">
          Copyright 2025 Biomedical Microdevices Laboratory
        </div>
      </div>
      <div className="w-full border-4 border-rao-blue"></div>
    </div>
  );
};

export default Footer;
