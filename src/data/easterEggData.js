import Itnes from "../../public/images/easterEggs/ITnes.jpg";
import skydive from "../../public/images/easterEggs/Ines_Skydive.jpg";
import walhai from "../../public/images/easterEggs/walhai.jpg";
import prost from "../../public/images/easterEggs/Ines_mit_Wein.JPG";

export const easterEggData = {
  intro: {
    title: "Fun Fact: Auf dieser Website sind 5 Easter Eggs versteckt!",
    text: `Auf dieser Seite steckt mehr, als du auf den ersten Blick siehst: Persönliche Geschichten, interessante Seiten meiner beruflichen 
    Reise und ein paar unerwartete Talente, die man garantiert nicht in einem Lebenslauf findet.<br>
Zwischen Zeilen, Überschriften und Textpassagen haben sie sich versteckt. <br><br>
Einfach mal drüberhovern, reinlesen, schmunzeln.`,
  },
  frontend: {
    title: "Mehr als Code – mein kreativer Aha-Moment",
    index: "01 / 05",
    text: `Ich dachte lange, mein Herz schlägt für Code.<br>
Doch während meines Frontend-Praktikums habe ich gemerkt: Mir fehlt etwas. Der kreative Spielraum, die Vielfalt, das Konzipieren.
Das hat mir die Augen geöffnet: Ich will mehr als nur Coden. Ich will gestalten, mitdenken, mitentwickeln.<br>
Heute weiß ich: Ich bin ein echter Allrounder – mit Background in Zahlen und Finanzen, aber einem Faible für UX, digitale Kommunikation, Design und Storytelling. <br>
Und ja – ich mag’s, wenn’s nicht nur funktioniert, sondern auch richtig gut aussieht 😄`,
  },
  itnes: {
    title: "ITnes – wie alles begann",
    index: "02 / 05",
    text: `Der Spitzname ITnes ist übrigens kein Künstlername – er ist mir in meinem allerersten IT-Job passiert.
Damals beim Quereinstieg in der Grand Garage war ich die „Neue“ im Tech-Team.
Als ich das erste Mal am Code tüftelte, meinte eine Kollegin lachend:
„Wow, du bist ja jetzt nicht mehr Ines, sondern IT-nes!“ <br>
Der Name ist geblieben, auch durchs Studium hindurch, wo ich oft die erste Anlaufstelle bei IT-Fragen war.`,
    image: [
      {
        src: Itnes.src,
        alt: "Ines als ITnes in ihrem ersten IT-Job",
      },
    ],
  },
  strong: {
    title: "STRONG Nation® – Ich schwitz das aus!",
    index: "03 / 05",
    text: `Neben HTML, CSS & Co. habe ich auch eine ganz andere Lizenz:<br>
Ich bin zertifizierte STRONG Nation® Trainerin – ein hochintensives Ganzkörper-Workout, das auf Musik abgestimmt ist.<br>
Mein Geheimrezept gegen stressige Arbeitstage?<br>
Eine Runde Power, Beats & Burpees – und wenn’s sein muss, bring ich auch Kolleginnen nach Feierabend ordentlich ins Schwitzen (natürlich freiwillig 😄)`,
    video: "https://www.youtube.com/shorts/ayVNHYPDuMI",
  },
  travel: {
    title: "Abenteuerlustig mit Bauchkribbeln",
    index: "04 / 05",
    text: `Nach meiner Zeit bei Hofer habe ich mir eine kleine Auszeit gegönnt – sechs Wochen ganz allein durch Australien. <br>
Eine Reise, die nicht nur mein Englisch, sondern vor allem meine Reiselust und Neugier aufs Unbekannte geweckt hat. <br>
Seitdem zieht’s mich immer wieder hinaus in die Welt: <br>
Fallschirmspringen in Australien? Check. <br>
Tauchen mit Walhaien auf den Philippinen? Check. <br>
Ich liebe es, Neues auszuprobieren. Hauptsache, es kitzelt ein bisschen im Bauch. <br>
Und keine Sorge: Auch beruflich lande ich immer wieder sicher. Meistens sogar auf beiden Beinen 😉`,
    image: [
      {
        src: skydive.src,
        alt: "Ines beim Fallschirmspringen in Australien",
      },
      {
        src: walhai.src,
        alt: "Ines beim Tauchen mit einem Walhai",
      },
    ],
  },
  happy: {
    title: "Mein Happy Place",
    index: "05 / 05",
    text: `Sonne, frische Luft, gute Gesellschaft und vielleicht ein kaltes Bier oder ein Glaserl Wein:
Mehr brauch ich nicht, um glücklich zu sein. <br>
Ob mit Familie, Freund*innen oder Kolleg*innen – am liebsten sitze ich draußen, witzle herum und genieß einfach den Moment. <br>
(Apropos: Wenn du bis hierher alle Easter Eggs gefunden hast – Prost! Das war das letzte 🎉)`,
    image: [
      {
        src: prost.src,
        alt: "Ines mit einem Glas Wein in der Sonne",
      },
    ],
  },
};
