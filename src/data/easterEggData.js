import Itnes from "../../public/images/easterEggs/ITnes.jpg";
import skydive from "../../public/images/easterEggs/Ines_Skydive.jpg";
import walhai from "../../public/images/easterEggs/walhai.jpg";
import prost from "../../public/images/easterEggs/Ines_mit_Wein.jpeg";
import kindle from "../../public/images/easterEggs/Kindle_und_Katze.jpeg";
import code from "../../public/images/easterEggs/Ines_am_verzweifeln.jpeg";

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
    index: "01 / 06",
    text: `Ich dachte lange, mein Herz schlägt für Code.<br>
Doch während meines Frontend-Praktikums habe ich gemerkt: Mir fehlt etwas. Der kreative Spielraum, das Designen, das Konzipieren.
Das hat mir die Augen geöffnet: Ich will Ideen zum Leben bringen, nicht nur Code zum Laufen. <br><br>
Kleiner Fun Fact am Rande: Ich habe dieses Portfolio selbst programmiert – mit mehr Schweiß und Verzweiflungsausbrüchen 
als Glücksmomenten. Aber immerhin läuft sie. Und sieht dabei ganz passabel aus, oder?`,
    image: [
      {
        src: code.src,
        alt: "Ines am Verzeifeln beim Programmieren",
      },
    ],
  },
  itnes: {
    title: "IT-nes – wie alles begann",
    index: "02 / 06",
    text: `Der Spitzname IT-nes ist mir in meinem allerersten IT-Job passiert.
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
    index: "03 / 06",
    text: `Kreatives Arbeiten am Bildschirm ist mein Ding, aber manchmal muss die Energie einfach raus.
    Als zertifizierte STRONG Nation® Trainerin liebe ich es, nach einem langen Tag körperlich Vollgas zu geben. <br>
STRONG Nation® ist ein hochintensives Ganzkörper-Workout, bei dem jede Bewegung im Takt der Musik sitzt. Mein persönliches Mittel gegen stressige Tage: Power, Beats & Burpees.
Gerne bring ich auch Kolleg*innen nach Feierabend zum Schwitzen 😄`,
    video: "https://www.youtube.com/shorts/ayVNHYPDuMI",
  },
  travel: {
    title: "Abenteuerlustig mit Bauchkribbeln",
    index: "04 / 06",
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
  booknerd: {
    title: "Wenn ich mal ein bisschen Abstand zur Realität brauche",
    index: "05 / 06",
    text: `Ja, ich liebe Bücher. Nein, leider keine Biografien. Auch keine hochphilosophischen Werke. <br>
Dafür aber umso mehr Feen, Drachen und ein bisschen Romantasy-Chaos. <br>
Mein Herz schlägt für Velaris und für A Court of Thorns and Roses. <br>
Falls du das auch feierst (oder zumindest kennst): Welcome to the Night Court. Wenn nicht – auch nicht schlimm, immerhin liest du gerade mein Portfolio 😄`,
    image: [
      {
        src: kindle.src,
        alt: "Buchcover-Illustration 'Das Reich der sieben Höfe' mit Katze",
      },
    ],
  },
  happy: {
    title: "Wenn der Output Pause hat",
    index: "06 / 06",
    text: `Sonne, frische Luft, gute Gesellschaft und vielleicht ein kaltes Bier oder ein Glaserl Wein:
Mehr brauch ich nicht, um glücklich zu sein. <br>
Ob mit Familie, Freund*innen oder Kolleg*innen – am liebsten sitze ich draußen, witzle herum und genieße einfach den Moment. <br>
(Apropos: Wenn du bis hierher alle Easter Eggs gefunden hast – Prost! Das war das letzte 🎉)`,
    image: [
      {
        src: prost.src,
        alt: "Ines mit einem Glas Wein in der Sonne",
      },
    ],
  },
};
