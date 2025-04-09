import placeholder from "@/public/placeholder.png";
import Image from "next/image";
import Link from "next/link";
import { MdMail } from "react-icons/md";

interface MemberProps {
  name: string;
  title: string;
  image: string;
  email: string;
}
const Member = (props: MemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image height={128} width={128} alt="placeholder" src={placeholder} />
      </div>
      <div className="text-rao-yellow">{props.name}</div>
      <div className="text-sm font-thin">{props.title}</div>
      {props.email && (
        <div className="w-full break-words">
          <Link
            href={`mailto:${props.email}`}
            className="flex items-center gap-1"
          >
            <MdMail className="text-rao-yellow" />
            <span className="w-full break-all text-xs md:break-normal">
              {props.email}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Member;
