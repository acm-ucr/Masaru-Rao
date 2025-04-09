"use client";
import { useState } from "react";
import ResearchSection from "@/components/research/ResearchSection";
import { researchData } from "@/data/researchData";
import Heading from "@/components/Heading";

export default function VascularIntervention() {
  const [activeTab, setActiveTab] = useState("VascularIntervention");

  return (
    <div className="p-8 text-white">
      <Heading name="Current Research" />
      <div className="flex justify-center">
        <div className="md:w-11/12">
          {/* Left sidebar navigation */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/5">
              <div className="flex flex-col space-y-4">
                <button
                  className={`rounded-xl p-4 text-left md:rounded-l-xl md:rounded-r-none ${activeTab === "VascularIntervention" ? "bg-rao-yellow text-black" : ""}`}
                  onClick={() => setActiveTab("VascularIntervention")}
                >
                  Vascular intervention
                </button>
                <button
                  className={`rounded-xl p-4 text-left md:rounded-l-xl ${activeTab === "MinimallyInvasiveDrugDelivery" ? "bg-rao-yellow text-black" : ""}`}
                  onClick={() => setActiveTab("MinimallyInvasiveDrugDelivery")}
                >
                  Minimally-invasive drug delivery
                </button>
                <button
                  className={`rounded-xl p-4 text-left md:rounded-l-xl ${activeTab === "Neurotechnology" ? "bg-rao-yellow text-black" : ""}`}
                  onClick={() => setActiveTab("Neurotechnology")}
                >
                  Neurotechnology
                </button>
                <button
                  className={`rounded-xl p-4 text-left md:rounded-l-xl ${activeTab === "CellularEngineering" ? "bg-rao-yellow text-black" : ""}`}
                  onClick={() => setActiveTab("CellularEngineering")}
                >
                  Cellular engineering
                </button>
                <button
                  className={`rounded-l-xl p-4 text-left ${activeTab === "TitaniumMicromachining" ? "text-blackc bg-rao-yellow" : ""}`}
                  onClick={() => setActiveTab("TitaniumMicromachining")}
                >
                  Titanium micromachining
                </button>
              </div>
            </div>

            {Object.keys(researchData).map(
              (tabId) =>
                activeTab === tabId && (
                  <ResearchSection
                    key={tabId}
                    researchData={researchData[tabId]}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
