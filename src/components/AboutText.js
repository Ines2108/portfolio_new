import React from "react";
import Popup from "./Popup";
import { easterEggData } from "@/data/easterEggData";

const AboutText = () => {
  return (
    <>
      <div className="mt-4 lg:-mt-32 flex justify-end">
        <h2 className="w-5/6 text-2xl font-montserrat font-bold sm:text-3xl md:text-4xl xl:text-5xl text-primary text-right normal-case">
          Hi, ich bin Ines, aber man nennt mich auch gerne{" "}
          <Popup
            title={easterEggData.itnes.title}
            text={easterEggData.itnes.text}
            index={easterEggData.itnes.index}
            image={easterEggData.itnes.image}>
            <span className="cursor-pointer hover:text-secundary transition">
              IT-nes.
            </span>
          </Popup>
        </h2>
      </div>
      <div className="pt-4 font-montserrat text-base xl:text-lg text-justify">
        <p>
          Ich bin 31 Jahre alt, habe einen Abschluss in Kommunikation, Wissen,
          Medien in Hagenberg gemacht und liebe es, Inhalte zu gestalten, die
          berühren, begeistern und in Erinnerung bleiben.
        </p>
        <br />
        <p>
          Früher habe ich mich in der Finanzwelt durch Tabellen gekämpft bis mir
          klar wurde: Mein Herz schlägt nicht für Zahlen, sondern für kreative
          Ideen und dafür, ihnen Ausdruck zu verleihen. Seitdem bin ich mit
          Leidenschaft in der digitalen Welt unterwegs – irgendwo zwischen
          UX/UI-Design, Marketing, Videoschnitt und dem Entdecken neuer Tools,
          die das Arbeiten leichter und spannender machen.
        </p>
        <br />
        <p>
          Ich bin eine kreative Allrounderin, die technische Raffinesse gerne
          mit Ästhetik verbindet. Ob ich gerade eine Benutzeroberfläche
          optimiere, eine Videokampagne schneide oder ein Konzept zaubere – ich
          liebe es, Dinge zu erschaffen, die nicht nur hübsch aussehen, sondern
          auch Sinn machen und Emotionen auslösen.
        </p>
        <br />
        <div className="space-y-4 font-montserrat text-base xl:text-lg text-justify">
          Abseits vom Bildschirm findest du mich beim Tennisspielen, beim{" "}
          <Popup
            title={easterEggData.strong.title}
            text={easterEggData.strong.text}
            index={easterEggData.strong.index}
            video={easterEggData.strong.video}>
            <span className="cursor-pointer hover:text-secundary hover:font-bold transition">
              STRONG Nation® Kurs
            </span>
          </Popup>{" "}
          als motivierende Antreiberin, beim Wandern auf dem nächsten Gipfel
          oder beim Relaxen mit meinen zwei flauschigen Katzen. Ich liebe es,
          unterwegs zu sein, neue Menschen und Kulturen kennenzulernen und die
          Welt aus möglichst vielen Blickwinkeln zu betrachten.
        </div>
      </div>
    </>
  );
};

export default AboutText;
