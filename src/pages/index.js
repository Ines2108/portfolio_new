import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/abstract_ines2_small.png";
import dynamic from "next/dynamic";
import Popup from "@/components/Popup";
import { easterEggData } from "@/data/easterEggData";

const AnimatedHeadline = dynamic(
  () => import("@/components/AnimatedHeadline"),
  {
    ssr: false,
  }
);
const EasterEgg = dynamic(() => import("@/components/EasterEgg"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Ines Niedermaier</title>
        <meta
          name="description"
          content="Creative Portfolio of Ines Niedermaier"
        />
      </Head>

      <main className="relative flex flex-col justify-center items-center w-full bg-light">
        {/* Mobile Layout - nur sichtbar bei < xl */}
        <div className="xl:hidden flex flex-col justify-center items-center w-full px-6 py-10">
          <AnimatedHeadline
            text="A creative soul is"
            className="text-transparent pt-4 sm:pt-0 bg-clip-text bg-gradient-to-r from-secundary to-primary text-2xl text-center"
            delay={0}
          />
          <AnimatedHeadline
            text="never out of colors"
            className="text-transparent pt-2 sm:pt-0 bg-clip-text bg-gradient-to-r from-primary to-tertiary text-2xl text-center"
            delay={1}
          />
          <Image
            src={profilePic}
            alt="Abstract Ines"
            className="w-full max-w-[700px] h-auto -mt-4 sm:-mt-12 mb-8 z-10"
            priority
          />
          <p className="text-4xl md:text-6xl font-bold text-primary text-center">
            Ines Niedermaier
          </p>
          <p className="text-2xl md:text-4xl text-primary text-center">
            Frontend Developer | UX/UI-Designer | Marketer
          </p>
        </div>

        {/* Desktop Layout - nur sichtbar ab xl */}
        <Layout className="hidden xl:flex w-full h-full flex-col justify-between relative">
          <div className="relative w-[90vw] max-w-[2000px] mx-auto aspect-[16/10]">
            {/* Oben links */}
            <div className="absolute w-[clamp(30rem,50vw,56rem)] top-16">
              <AnimatedHeadline
                text="A creative soul is"
                className="pl-4 text-transparent bg-clip-text bg-gradient-to-r from-secundary to-primary"
                delay={0}
              />
            </div>

            {/* Unten links */}
            <div
              className="absolute w-[clamp(15rem,20vw,20rem)] font-bold"
              style={{
                left: `clamp(3rem, 8vw, 15rem)`,
                bottom: `clamp(3rem, 17vw, 20rem)`,
              }}>
              <p className="text-[clamp(1.5rem,4vw,8rem)] leading-[clamp(3rem,4vw,6.5rem)] text-primary">
                Ines Niedermaier
              </p>
            </div>

            {/* Bild */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src={profilePic}
                alt="Abstract Ines"
                className="w-[clamp(35rem,48vw,52rem)] h-auto"
                priority
                sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
              />
            </div>

            {/* Oben rechts */}
            <div
              className="absolute w-[clamp(13rem,19vw,20rem)]"
              style={{
                right: `clamp(3rem, 10vw, 15rem)`,
                top: `clamp(3rem, 12vw, 8rem)`,
              }}>
              <div className="text-[clamp(1.5rem,2vw,5rem)] leading-[clamp(2rem,2vw,5.5rem)] text-right text-primary">
                UX/UI-Designer |{" "}
                <Popup
                  title={easterEggData.frontend.title}
                  text={easterEggData.frontend.text}
                  index={easterEggData.frontend.index}>
                  <span className="cursor-pointer hover:text-secundary transition">
                    Frontend Developer
                  </span>
                </Popup>{" "}
                | Marketer
              </div>
            </div>

            {/* Unten rechts */}
            <div
              className="absolute w-[clamp(15rem,30vw,40rem)] text-right"
              style={{
                right: `clamp(3rem, 4vw, 15rem)`,
                bottom: `clamp(3rem, 8vw, 20rem)`,
              }}>
              <AnimatedHeadline
                text="never out of colors"
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary"
                delay={1}
              />
            </div>
          </div>
        </Layout>
        <div className="absolute right-8 -bottom-20">
          <Popup
            title={easterEggData.intro.title}
            text={easterEggData.intro.text}>
            <EasterEgg />
          </Popup>
        </div>
      </main>
    </>
  );
}
