import Image from "next/image";
import { ResearchData } from "@/data/researchData";

interface ResearchSectionProps {
  researchData: ResearchData;
}

const ResearchSection: React.FC<ResearchSectionProps> = ({ researchData }) => {
  const { title, description, publications, images } = researchData;

  return (
    <div className="md:w-4/5">
      <div className="rounded-b-lg rounded-r-lg border border-gray-700 p-6">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <div className="mb-6 h-1 w-24 bg-rao-yellow"></div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="md:w-3/5">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className={`mb-6 ${index === description.length - 1 ? "mb-8" : ""}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mb-4">
              <h3 className="mb-2 text-sm font-bold text-rao-yellow">
                Representative publications:
              </h3>
              <ul className="space-y-2 text-sm">
                {publications.map((pub, index) => (
                  <li key={index}>
                    [{index + 1}] {pub.authors},{" "}
                    <span className="font-bold italic text-rao-yellow">
                      {pub.journal}
                    </span>{" "}
                    {pub.citation}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:w-2/5">
            {images.map((image, index) => (
              <div key={index} className={index === 0 ? "mb-6" : ""}>
                <Image
                  src={image.src || "/api/placeholder/400/320"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="mb-2 rounded-lg border border-gray-700"
                />
                <p className="text-sm">{image.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
