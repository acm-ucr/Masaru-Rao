import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import { Poppins } from "next/font/google";
import { Anta } from "next/font/google";

export const metadata = {
  title: "Biomedical Microdevices Laboratory",
  description:
    "Biomedical Microdevices Laboratory at the University of California, Riverside",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const anta = Anta({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-anta",
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${anta.className}`}>
        <ReactQueryClientProvider>
          <div className="font-poppins">{children}</div>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
