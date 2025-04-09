import { StaticImageData } from "next/image";
import scanningElectron from "@/public/scanning_electron.png";
import stent from "@/public/stent.png";
import cell1 from "@/public/cell1.png";
import cell2 from "@/public/cell2.png";
import titanium1 from "@/public/titanium1.png";
import titanium2 from "@/public/titanium2.png";
import opth1 from "@/public/opth1.png";
import opth2 from "@/public/opth2.png";
import neuro1 from "@/public/neuro1.png";
import neuro2 from "@/public/neuro2.png";

// Define types for our data structure
export interface Publication {
  authors: string;
  journal: string;
  citation: string;
}

export interface ResearchImage {
  src?: string | StaticImageData; // Allow for both string URLs and imported images
  alt: string;
  caption: string;
}

export interface ResearchData {
  tabId: string;
  title: string;
  description: string[];
  publications: Publication[];
  images: ResearchImage[];
}

export interface ResearchDataCollection {
  [key: string]: ResearchData;
}

// Placeholder for imported images
// You can import actual images later like this:
// import stentImage from '../public/images/stent.jpg';
// import cellImage from '../public/images/cell.jpg';

export const researchData: ResearchDataCollection = {
  VascularIntervention: {
    tabId: "VascularIntervention",
    title: "Vascular intervention",
    description: [
      "Research in this thrust focuses on developing deeper understanding of how nanoscale surface topography affects vascular cell response, and applying this understanding towards rational design of stents and other devices to elicit therapeutically desirable outcomes.",
      "Thus far, our in vitro studies on planar substrates have shown that rationally-designed surface nanopatterning can: a) enhance endothelial cell (EC) adhesion and proliferation; b) promote elongated EC morphology reminiscent of the native endothelium; c) preferentially enhance EC adhesion and proliferation over smooth muscle cells under competitive co-culture conditions; and d) promote enhanced atheroprotective factor expression in ECs. Collectively, these results suggest potential for a new paradigm where rationally-designed nanopatterning provides a physical means for complementing (or replacing) current pharmacological intervention schemes for mitigating adverse physiological responses to stenting (i.e. restenosis & late stent thrombosis).",
      "In parallel, we have been developing means for evaluating cellular response to surface nanopatterning in more physiologically-relevant contexts, i.e. those that provide exposure to the complex multicellular milieu, flow-induced shear, and tissue-device interactions present in vivo. The balloon-deployable nanopatterned stents shown here represent the first attempt to develop a device platform that will eventually provide such capability, and do so in a manner consistent with conventional vascular stents.",
    ],
    publications: [
      {
        authors: "SC Gott, BA Jabola, and MP Rao",
        journal: "J Micromech Microeng",
        citation: "25(8):085016, 2015.",
      },
      {
        authors: "P Vandrangi, SC Gott, R Kozaka, VGJ Rodgers, and MP Rao",
        journal: "PLoS ONE",
        citation: "9(10):e111465, 2014.",
      },
      {
        authors: "P Vandrangi, SC Gott, R Kozaka, MP Rao, and VGJ Rodgers",
        journal: "Circulation",
        citation: "128(22 Suppl):A18077, 2013.",
      },
      {
        authors: "J Lu, MP Rao, NC MacDonald, D Khang, and TJ Webster",
        journal: "Acta Biomater",
        citation: "4(1):192-201, 2008.",
      },
    ],
    images: [
      {
        src: scanningElectron,
        alt: "Scanning electron micrograph of nanopatterned Ti stent",
        caption:
          "Scanning electron micrograph of nanopatterned Ti stent (deployed).",
      },
      {
        src: stent,
        alt: "Surface of a nanopatterned stent",
        caption:
          "Surface of a nanopatterned stent with 0.75 μm groove width grating in heavily deformed region.",
      },
    ],
  },
  CellularEngineering: {
    tabId: "CellularEngineering",
    title: "Cellular engineering",
    description: [
      "Research in this thrust focuses on developing novel MEMS-based microinjection instrumentation that may eventually serve as a fundamental enabler for cell-based therapies.",
      'Microinjection represents the "gold standard" for cellular manipulation, due to its precision, safety, and applicability to a wide variety of cell types and molecules. However, the reliance of conventional microinjection instrumentation upon manual operation and serialized injection limits throughput (~3 cells/min). This therefore precludes its use for ex vivo cell therapies, where microinjection could address safety concerns associated with prevailing bulk manipulation techniques (e.g. viral vectors, electroporation, & lipofection).',
      "The Si-based ultrahigh throughput (UHT) mechanoporation device shown here represents the first step towards addressing this limitation. The key novelty of this device lies in its monolithic integration of cell capture and poration functions, as well as its massive-parallelization, which provides opportunity for UHT operation with minimal human or robotic involvement. Thus far, we have demonstrated devices capable of throughputs > 1k cells/min, which exceeds the state-of-the-art by 2 - 3 orders of magnitude and begins to approach the throughputs required for clinical relevance.",
    ],
    publications: [
      {
        authors:
          "HG Dixit, R Starr, ML Dundon, PI Pairs, X Yang, Y Zhang, D Nampe, CB Ballas, H Tsutsui, SJ Forman, CE Brown, and MP Rao",
        journal: "Nano Letters",
        citation: "20(2):860-867, 2020.",
      },
    ],
    images: [
      {
        src: cell1,
        alt: "Scanning electron micrograph of a single capture site",
        caption:
          "Scanning electron micrograph of a single capture site within a UHT mechanoporation device with 10k capture sites.",
      },
      {
        src: cell2,
        alt: "Flow cytometry results",
        caption:
          "Flow cytometry results showing poration efficiency for K562 human leukemia cells",
      },
    ],
  },
  MinimallyInvasiveDrugDelivery: {
    tabId: "MinimallyInvasiveDrugDelivery",
    title: "Minimally-invasive drug delivery",
    description: [
      "Research in this thrust focuses on addressing a critical unmet need, namely the development of a safe, simple, and efficacious means for delivering drugs to the eye. We have recently reported Ti-based microneedle (MN) devices that represent our first step towards achieving this goal.",
      "MNs offer promise due to their diminutive size, which allows penetration into, but not through sclera or cornea. This provides a minimally-invasive means for precisely depositing drugs within such tissues, thus enabling circumvention of intrinsic transport barriers and clearance mechanisms, while also minimizing potential for retinal damage. Although both passive and active MNs have been reported, the former may prove more advantageous for eventual clinical use, due to their lower complexity and cost. However, potential for translation will be constrained by the limited carrying capacity of devices demonstrated to date, since this necessitates use of excessively large MN arrays to deliver required dosages.",
      "The fenestrated Ti MNs shown here seek to address this limitation. Thus far, we have demonstrated that these devices: a) increase carrying capacity up to 5-fold relative to comparable solid MNs; b) provide potential for enhanced safety, due to their graceful, plasticity-based failure mode; and c) possess sufficient stiffness for corneal insertion.",
    ],
    publications: [
      {
        authors: "O Khandan, MY Kahook, and MP Rao",
        journal: "Sensor Actuat B-Chem",
        citation: "223:15-23, 2016.",
      },
      {
        authors: "ER Parker, MP Rao, KL Turner, CD Meinhart, and NC MacDonald",
        journal: "J Microelectromech S",
        citation: "16(2):289-95, 2007.",
      },
    ], // You can add more research areas here as needed
    images: [
      {
        src: opth1,
        alt: "Scanning electron micrograph",
        caption:
          "Scanning electron micrograph of fenestrated Ti microneedle and conventional 26g stainless steel hypodermic needle.",
      },
      {
        src: opth2,
        alt: "Histological section",
        caption:
          "Histological section of excised rabbit cornea at insertion site of fenestrated Ti microneedle (H&E stain).",
      },
    ],
  },
  Neurotechnology: {
    tabId: "Neurotechnology",
    title: "Neurotechnology",
    description: [
      "Research in this thrust focuses on addressing fundamental reliability limitations that may ultimately constrain the clinical translation of penetrating microelectrodes used for neural prosthetic interfaces.",
      "By providing means for directly interacting with neural tissues, penetrating microelectrodes have shown promise for restoring neurological functions lost to disease, stroke, or injury. However, the intrinsic brittleness of silicon, the material most commonly used for the manufacture of such devices, creates non-negligible probability for fracture-based fragmentation within the brain. This therefore motivates the development of means for mitigating this hazard, given the potential severity and resulting adverse impact this could have on future clinical viability.",
      "The Ti-based microelectrodes shown here seek to address this limitation. Thus far, we have demonstrated that these devices: a) provide potential for enhanced safety, due to their graceful, plasticity-based failure mode; b) possess sufficient stiffness for reliable cortical penetration; c) provide recording performance comparable to that of commercially-available devices; and d) allow, for the first time, simultaneous recording of multi-unit data and isolated action potentials in auditory cortex and thalamus.",
    ],
    publications: [
      {
        authors: "PT McCarthy, KJ Otto, and MP Rao",
        journal: "Biomed Microdevices",
        citation: "13(3):503-515, 2011.",
      },
      {
        authors: "PT McCarthy, MP Rao, and KJ Otto",
        journal: "J Neural Engr",
        citation: "8(4):046007 (9pp), 2011.",
      },
    ],
    images: [
      {
        src: neuro1,
        alt: "Scanning electron micrograph",
        caption:
          "Scanning electron micrograph of Ti-based penetrating microelectrode.",
      },
      {
        src: neuro2,
        alt: "Simultaneously-recorded, noise-evoked, peri-stimulus time histograms",
        caption:
          "Simultaneously-recorded, noise-evoked, peri-stimulus time histograms from the auditory cortex (top 2 rows) and thalamus (bottom 2 rows) of an anesthetized rat. The green bar along the x-axis reflects the timing of the broadband acoustic noise stimulus",
      },
    ],
  },
  TitaniumMicromachining: {
    tabId: "TitaniumMicromachining",
    title: "Titanium micromachining",
    description: [
      "The extraordinary opportunity afforded by MEMS has driven significant effort to extend its application towards biomedical devices. However, continuing reliance upon micromechanical materials adopted from the semiconductor industry may ultimately limit the scope of what can be achieved. Many such materials suffer from poor mechanical reliability due to low fracture toughness, which results in extreme sensitivity to stress concentration and predisposition to catastrophic failure by fracture. Although mitigation via robust design and packaging is sometimes possible, this invariably increases complexity and cost. Moreover, in many emerging applications, these avenues are not available, due to design constraint and/or performance restriction, thus underscoring need for development of viable alternatives.",
      "A short time ago, we reported the development of techniques that enable, for the first time, deep etching of bulk titanium. Titanium possesses high fracture toughness, which enhances reliability through graceful, plasticity-based failure. Moreover, titanium is of particular interest for biomedical applications, due to its proven biocompatibility in chronic implantation. Our new techniques provide opportunity to leverage these advantageous characteristics by enabling fabrication of titanium-based MEMS devices with a degree of design sophistication that would be difficult if not impossible to achieve with prevailing metal micromachining methods (see Figures). Moreover, these techniques fully leverage existing semiconductor process infrastructure, thus ensuring scalability to low-cost/high-volume manufacturing, as well as opportunity for high-density multifunctional integration.",
    ],
    publications: [
      {
        authors:
          "BWK Woo, SC Gott, RA Peck, D Yan, MW Rommelfanger, and MP Rao",
        journal: "ACS Appl Mater Interfaces",
        citation: "9(23):20161-20168, 2017.",
      },
      {
        authors: "ER Parker, MF Aimi, BJ Thibeault, MP Rao, and NC MacDonald",
        journal: "J Electrochem Soc",
        citation: "152(10):C675-83, 2005.",
      },
      {
        authors: "MF Aimi, MP Rao, NC MacDonald, AS Zuruzi, and DP Bothman",
        journal: "Nature Materials",
        citation: "3(2):103-05, 2004.",
      },
    ],
    images: [
      {
        src: titanium1,
        alt: "Scanning electron micrograph of a titanium micromirror device",
        caption:
          "Scanning electron micrograph of a titanium micromirror device",
      },
      {
        src: titanium2,
        alt: "Scanning electron micrograph of a titanium interdigitated electrode structure",
        caption:
          "Scanning electron micrograph of a titanium interdigitated electrode structure",
      },
    ],
  },
};
