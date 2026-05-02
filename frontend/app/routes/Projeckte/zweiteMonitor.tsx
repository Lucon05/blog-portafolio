import { Link } from "react-router";

import Cartica from "~/components/carticas";

export default function AuslandsPraktikum() {
  return (
    <div>
      <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start"> Second Life Display</h1>
        <Link
          to="/AltesPortafolio"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Zurück
        </Link>
      </div>
      <div>
        <div className=" lg:flex lg:items-center">
          <div className="m-5  p-5 lg:max-w-4/8 ">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Projektbeschreibung</b>
            </h2>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              In diesem Projekt gebe ich alter Hardware ein zweites Leben. Aus
              dem Display eines kaputten Laptops mache ich einen externen
              Monitor. Die Idee dahinter ist einfach: Als ich an meinen
              Projekten gearbeitet habe, habe ich gemerkt, dass ich einen
              zweiten Bildschirm brauche, um einen besseren Überblick zu
              behalten. Statt neue Hardware zu kaufen, nutze ich die vorhandenen
              Teile weiter und setze sie sinnvoll ein.
            </p>
          </div>
          <div className="">
            <Cartica
              className="lg:mt-15 xl:mt-10"
              carticaLink={""}
              photo={"Img-Portafolio/Projekte/laptop.jpeg"}
            ></Cartica>
          </div>
        </div>

        <div className="flex-row-reverse lg:flex lg:items-center">
          <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Technische Vorbereitung & Analyse</b>
            </h2>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Analyse & Demontage:</b> Ich habe den Laptop vorsichtig
              zerlegt, um das Display unbeschädigt auszubauen.
            </p>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Technische Identifikation:</b> Durch die Modellnummer konnte
              ich herausfinden, welche Schnittstelle das Display nutzt
              (LVDS/eDP) und was ich dafür brauche.
            </p>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Komponentenauswahl:</b> Danach habe ich ein passendes
              Controller-Board gesucht und bestellt, das das Signal (z. B. HDMI)
              für das Display umwandelt.
            </p>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Aktueller Stand: </b>
              Das Projekt ist noch nicht fertig. Ich warte aktuell auf die
              Lieferung der Controller-Platine, um das Display testen zu können.
            </p>
          </div>
          <div className="">
            <Cartica
              className=""
              carticaLink={""}
              photo={"Img-Portafolio/Projekte/ImgOldDispaly2.jpg"}
            ></Cartica>
          </div>
        </div>

        <div className="lg:mb-20 lg:flex lg:items-center">
          <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Geplante nächste Schritte</b>
            </h2>

            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Funktionstest:</b> Prüfen, ob das Display richtig funktioniert
              (Bild, Beleuchtung).
            </p>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              {" "}
              <b>Gehäusebau: </b> Später möchte ich ein einfaches Gehäuse bauen,
              damit alles geschützt ist und sauber aussieht{" "}
            </p>
          </div>
          <div className="">
            <Cartica
              className="lg: xl:mt-10"
              carticaLink={""}
              photo={
                "Img-Portafolio/Projekte/WhatsApp Image 2026-04-29 at 23.19.37.jpeg"
              }
            ></Cartica>
          </div>
        </div>
      </div>
    </div>
  );
}
