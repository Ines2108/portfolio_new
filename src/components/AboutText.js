import React from "react";
import Popup from "./Popup";
import { easterEggData } from "@/data/easterEggData";

const AboutText = () => {
  return (
    <>
      <div className="mt-4 lg:-mt-32 flex justify-end">
        <h2 className="mb-6 w-5/6 text-2xl font-montserrat sm:text-3xl md:text-4xl xl:text-5xl text-primary text-right normal-case">
          Schön, dass du da bist. Ich bin Ines – und manchmal auch einfach{" "}
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
          Mein Weg hat in der Finanzwelt begonnen. Dort habe ich schnell
          gemerkt: Zahlen kann ich, aber wirklich gut bin ich darin, Ideen
          sichtbar zu machen.
        </p>
        <br />
        <p>
          Heute arbeite ich im digitalen Marketing an der Schnittstelle von
          Konzept, Design und Umsetzung. Mich interessiert nicht nur, wie etwas
          aussieht, sondern vor allem, ob es funktioniert. Deshalb verbinde ich
          UX/UI, Content, Kampagnen und Video so, dass daraus stimmige
          Gesamterlebnisse entstehen – durchdacht, klar und mit Wirkung. Ich
          probiere gern neue Tools aus, denke mich schnell in Themen rein und
          hinterfrage Dinge, die „man schon immer so gemacht hat“.
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
          als motivierende Antreiberin, auf Reisen, in den Bergen – oder zuhause
          beim Spielen, Kuscheln und Zeitverbringen mit meinen zwei Katzen.
        </div>
      </div>
    </>
  );
};

export default AboutText;
