import React from "react";

interface SubHeadingProps {
  name: string;
}
const SubHeading = (prop: SubHeadingProps) => {
  return (
    <div className="inline-flex flex-col text-lg">
      <div className="font-bold">{prop.name}</div>
      <hr className="border-1 border-rao-yellow bg-rao-yellow px-2" />
    </div>
  );
};

export default SubHeading;
