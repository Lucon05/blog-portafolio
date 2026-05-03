import { Link } from "react-router";

import Cartica from "~/components/carticas";

export default function AltesPortafolio() {
  return (
    <div>
      <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start">Altes Portafolio</h1>

        <Link
          to="/Projekte"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Zurück
        </Link>
      </div>
      <div>
        <div className="text-[#2D2D2D] flex-row-reverse lg:mt-20 lg:flex lg:items-center">
          <div className="m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Projektbeschreibung: </b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Dieses Projekt war mein erstes Portfolio, das ich während meiner
              Zeit bei der Azubi Digital Akademie erstellt habe. Damals habe ich
              gerade erst angefangen, HTML und CSS zu lernen. Ich habe die Seite
              komplett selbst aufgebaut, um ein Gefühl dafür zu bekommen, wie
              Webseiten strukturiert und gestaltet werden. <a className=" text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              href="https://lucon05.github.io/web-Portafolio/index.html"><b>zum Alten Portfolio</b></a>
            </p>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              <b>Status: </b>Abgeschlossen
            </p>
          </div>
          <div className="">
            <Cartica
              className=""
              carticaLink="https://lucon05.github.io/web-Portafolio/index.html"
              photo={"Img-Portafolio/Projekte/ImgOldCode.png"}
            ></Cartica>
          </div>
        </div>
        <div className=" text-[#2D2D2D] lg:mb-20 lg:flex lg:items-center">
          <div className="lg m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Was ich dabei gelernt habe: </b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Grundlagen von HTML und CSS
            </p>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Erste Layouts und Styling
            </p>
            <h2 className="mt-10 text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Rückblick</b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Rückblickend enthält das Projekt noch viele Fehler und ist nicht
              responsiv. Trotzdem ist es für mich ein wichtiger Meilenstein,
              weil ich hier meine ersten praktischen Erfahrungen gesammelt habe.
            </p>
          </div>
          <div className="">
            <Cartica
              className=""
              photo={"Img-Portafolio/Projekte/ImgOldPortafolio.png"}
              carticaLink="https://lucon05.github.io/web-Portafolio/index.html"
            ></Cartica>
          </div>
        </div>
      </div>
    </div>
  );
}
