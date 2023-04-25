import "./globals.css";
import { Roboto, Lobster_Two, VT323 } from "next/font/google";
import Nav from "./components/Nav";
import Hydrate from "./components/Hydrate";
//Define main font
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-robot",
});
const lobster = Lobster_Two({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-lobster",
});
const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata = {
  title: "Shill.lol",
  description: "Notice me senpai",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${roboto.variable} ${lobster.variable} ${vt323.variable}`}
      lang="en"
    >
      <Hydrate>
        <Nav />
        {children}
      </Hydrate>
    </html>
  );
}
