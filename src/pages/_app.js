import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Bayon } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const bayon = Bayon({
  subsets: ["latin"],
  variable: "--font-bayon",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <main
        className={`${montserrat.variable} ${bayon.variable} font-bayon bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
