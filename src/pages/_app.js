import "@/styles/globals.css";
import { Junge } from "next/font/google";
import { Bayon } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const junge = Junge({
  subsets: ["latin"],
  variable: "--font-junge",
  weight: "400",
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${junge.variable} ${bayon.variable} font-bayon bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
