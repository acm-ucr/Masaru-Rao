const backup_publications = [
  {
    type: "Journal",
    title: "Cell wall digestion of the dinoflagellate Brevoilum Minutum",
    authors:
      "PI Pairs, ML Dundon, J Narváez-Vásquez, ML Orozco-Cárdenas, T Xiang, RE Jinkerson, and MP Rao",
    journal: "J Appl Phycol",
    details: "36(1):181-189, 2024",
  },
  {
    type: "Journal",
    title:
      "Massively-parallelized, deterministic mechanoporation for intracellular delivery",
    authors:
      "HG Dixit, R Starr, ML Dundon, PI Pairs, X Yang, Y Zhang, D Nampe, CB Ballas, H Tsutsui, SJ Forman, CE Brown, and MP Rao",
    journal: "Nano Letters",
    details: "20(2):860-867, 2020",
  },
  {
    type: "Journal",
    title:
      "Meso-scale particle image velocimetry studies of neurovascular flows in vitro",
    authors:
      "RA Peck, E Bahena, R Jahan, G Aguilar, H Tsutsui, M Princevac, MM Wilhelmus, and MP Rao",
    journal: "JOVE-J Vis Exp",
    details: "(142):e58902, 2018",
  },
  {
    type: "Journal",
    title:
      "Current Carrying Capacity of Quasi-1D ZrTe3 van der Waals Nanoribbons",
    authors:
      "A Geremew, MA Bloodgood, E Aytan, BWK Woo, SR Corber, G Liu, K Bozhilov, TT Salguero, S Rumyantsev, MP Rao, and AA Balandin",
    journal: "IEEE Electron Device Lett",
    details: "39(5):735-738, 2018",
  },
  {
    type: "Journal",
    title:
      "Erythrocyte-Derived Nanoparticles as a Theranostic Agent for Near Infrared Fluorescence Imaging and Thrombolysis of Blood Clots",
    authors: "R Vankayala, SR Corber, JT Mac, MP Rao, MH Shafie, and B Anvari",
    journal: "Macromol Biosci",
    details: "18:1700379, 2018",
  },
  {
    type: "Journal",
    title: "Ultrahigh resolution titanium deep reactive ion etching",
    authors: "BWK Woo, SC Gott, RA Peck, D Yan, MW Rommelfanger, and MP Rao",
    journal: "ACS Appl Mater Interfaces",
    details: "9(23):20161–20168, 2017",
  },
  {
    type: "Journal",
    title:
      "Size-dependent piezoelectric and mechanical properties of electrospun P(VDF-TrFE) nanofibers for enhanced energy harvesting",
    authors:
      "G Ico, A Showalter, W Bosze, SC Gott, BS Kim, MP Rao, NV Myung, and J Nam",
    journal: "J Mater Chem A",
    details: "4:2293-2304, 2016",
  },
  {
    type: "Journal",
    title: "Fenestrated titanium microneedles for ocular drug delivery",
    authors: "O Khandan, MY Kahook, and MP Rao",
    journal: "Sensor Actuat B-Chem",
    details: "223:15-23, 2016",
  },
  {
    type: "Journal",
    title:
      "Substrate topography guides pore morphology in nanoporous gold thin films",
    authors: "CAR Chapman, P Daggumati, SC Gott, MP Rao, and E Seker",
    journal: "Scripta Mater",
    details: "110:33-36, 2016",
  },
  {
    type: "Journal",
    title:
      "Micro and nano-patterned topographical cues for regulating macrophage cell shape and phenotype",
    authors: "TU Luu, SC Gott, BWK Woo, MP Rao, and WF Liu",
    journal: "ACS Appl Mater Interfaces",
    details: "7(51):28665–28672, 2015",
  },
  {
    type: "Journal",
    title:
      "Vascular stents with submicrometer-scale surface patterning realized via titanium deep reactive ion etching",
    authors: "SC Gott, BA Jabola, and MP Rao",
    journal: "J Micromech Microeng",
    details: "25(8):085016, 2015",
  },
  {
    type: "Journal",
    title:
      "Comparative Endothelial Cell Response on Topographically Patterned Titanium and Silicon Substrates with Micrometer to Sub-Micrometer Feature Sizes",
    authors: "P Vandrangi, SC Gott, R Kozaka, VGJ Rodgers, and MP Rao",
    journal: "PLoS ONE",
    details: "9(10):e111465, 2014",
  },
  {
    type: "Journal",
    title:
      "Modular reservoir concept for MEMS-based transdermal drug delivery systems",
    authors: "CT Cantwell, P Wei, B Ziaie, and MP Rao",
    journal: "J Micromech Microeng",
    details: "24(11):117001, 2014",
  },
  {
    type: "Journal",
    title: "Wafer-scale titanium anodic bonding for microfluidic applications",
    authors: "O Khandan, D Stark, A Chang, and MP Rao",
    journal: "Sensor Actuat B-Chem",
    details: "205:244-248, 2014",
  },
  {
    type: "Journal",
    title:
      "Optical clearing agent perfusion enhancement via combination of microneedle poration, heating, and pneumatic pressure",
    authors: "Y Damestani, B Melakeberhan, MP Rao, and G Aguilar",
    journal: "Laser Surg Med",
    details: "46(6):488-498, 2014",
  },
  {
    type: "Journal",
    title:
      "Bone marrow stromal cell adhesion and morphology on micro- and sub-micropatterned titanium",
    authors: "AF Cipriano, N De Howitt, SC Gott, C Miller, MP Rao, and H Liu",
    journal: "J Biomed Nanotechnol",
    details: "10(4):660-668, 2014",
  },
  {
    type: "Journal",
    title:
      "Endothelial behavior and signaling on micro- & submicro- patterned titanium",
    authors: "P Vandrangi, SC Gott, R Kozaka, MP Rao, and VGJ Rodgers",
    journal: "Circulation",
    details: "128(22 Suppl):A18077, 2013",
  },
  {
    type: "Journal",
    title:
      "Transparent nanocrystalline yttria-stabilized-zirconia calvarium prosthesis",
    authors:
      "Y Damestani, CL Reynolds, J Szu, MS Hsu, Y Kodera, DK Binder, BH Park, JE Garay, MP Rao, and G Aguilar",
    journal: "Nanomed-Nanotechnol",
    details: "9(8):1135-1138, 2013",
  },
  {
    type: "Journal",
    title:
      "Simultaneous recording of rat auditory cortex and thalamus via a titanium-based, microfabricated, multi-nucleus, microelectrode device",
    authors: "PT McCarthy, MP Rao, and KJ Otto",
    journal: "J Neural Engr",
    details: "8(4):046007 (9pp), 2011",
  },
  {
    type: "Journal",
    title:
      "Robust penetrating microelectrodes for neural interfaces realized by titanium micromachining",
    authors: "PT McCarthy, KJ Otto, and MP Rao",
    journal: "Biomed Microdevices",
    details: "13(3):503-515, 2011",
  },
  {
    type: "Journal",
    title:
      "Titanium-based dielectrophoresis devices for microfluidic applications",
    authors:
      "YT Zhang, F Bottausci, MP Rao, ER Parker, I Mezic, and NC MacDonald",
    journal: "Biomed Microdevices",
    details: "10(4):509-517, 2008",
  },
  {
    type: "Journal",
    title:
      "Improved endothelial cell adhesion and proliferation on patterned titanium surfaces with rationally designed, micrometer to nanometer features",
    authors: "J Lu, MP Rao, NC MacDonald, D Khang, and TJ Webster",
    journal: "Acta Biomater",
    details: "4(1):192-201, 2008",
  },
  {
    type: "Journal",
    title: "Bulk micromachined titanium microneedles",
    authors: "ER Parker, MP Rao, KL Turner, CD Meinhart, and NC MacDonald",
    journal: "J Microelectromech S",
    details: "16(2):289-95, 2007",
  },
  {
    type: "Journal",
    title:
      "Inductively coupled plasma etching of bulk titanium for MEMS applications",
    authors: "ER Parker, MF Aimi, BJ Thibeault, MP Rao, and NC MacDonald",
    journal: "J Electrochem Soc",
    details: "152(10):C675-83, 2005",
  },
  {
    type: "Journal",
    title:
      "Single-mask, three-dimensional microfabrication of high-aspect-ratio structures in bulk silicon using reactive ion etching lag and sacrificial oxidation",
    authors: "MP Rao, MF Aimi, and NC MacDonald",
    journal: "Appl Phys Lett",
    details: "85(25):6281-83, 2004",
  },
  {
    type: "Journal",
    title: "High-aspect-ratio bulk micromachining of titanium",
    authors: "MF Aimi, MP Rao, NC MacDonald, AS Zuruzi, and DP Bothman",
    journal: "Nature Materials",
    details: "3(2):103-05, 2004",
  },
  {
    type: "Journal",
    title:
      "Laminar ceramics utilizing the zirconia tetragonal-to-monoclinic phase transformation to obtain a threshold strength",
    authors: "MG Pontin, MP Rao, AJ Sanchez-Herencia, and FF Lange",
    journal: "J Am Ceram Soc",
    details: "8(12):3041-48, 2002",
  },
  {
    type: "Journal",
    title:
      "Factors affecting threshold strength in laminar ceramics containing thin compressive layers",
    authors: "MP Rao and FF Lange",
    journal: "J Am Ceram Soc",
    details: "85(5):1222-28, 2002",
  },
  {
    type: "Journal",
    title:
      "Residual stress induced R-curves in laminar ceramics that exhibit a threshold strength",
    authors: "MP Rao, J Rödel, and FF Lange",
    journal: "J Am Ceram Soc",
    details: "84(11):2722-24, 2001",
  },
  {
    type: "Journal",
    title:
      "Effect of silica nanoparticle size on the stability of alumina/silica suspensions",
    authors: "ML Fisher, M Colic, MP Rao, and FF Lange",
    journal: "J Am Ceram Soc",
    details: "84(4):713-18, 2001",
  },
  {
    type: "Journal",
    title: "Laminar ceramics that exhibit a threshold strength",
    authors:
      "MP Rao, AJ Sanchez-Herencia, GE Beltz, RM McMeeking, and FF Lange",
    journal: "Science",
    details: "286(5437):102-05, 1999",
  },
];

export default backup_publications;
