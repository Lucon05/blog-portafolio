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
          weiter lesen
        </Link>
      </div>
      <div>
        <div className="flex-row-reverse lg:my-20 lg:flex lg:items-center">
          <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Projektbeschreibung: </b>
              <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
                Dieses Projekt war mein erstes Portfolio, das ich während meiner
                Zeit bei der Azubi Digital Akademie erstellt habe. Damals habe
                ich gerade erst angefangen, HTML und CSS zu lernen. Ich habe die
                Seite komplett selbst aufgebaut, um ein Gefühl dafür zu
                bekommen, wie Webseiten strukturiert und gestaltet werden.e, um
                das Display testen zu können.
              </p>
            </h2>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              <b>Status::</b> Abgeschlossen
            </p>
          </div>
          <div className="">
            <Cartica
              className="lg:mt-40 xl:mt-10"
              carticaLink={""}
              photo={"Img-Portafolio/Projekte/ImgOldCode.png"}
            ></Cartica>
          </div>
        </div>{" "}
<div className=" lg:my-20 lg:flex lg:items-center">
          <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Projektbeschreibung: </b>
              <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
                Dieses Projekt war mein erstes Portfolio, das ich während meiner
                Zeit bei der Azubi Digital Akademie erstellt habe. Damals habe
                ich gerade erst angefangen, HTML und CSS zu lernen. Ich habe die
                Seite komplett selbst aufgebaut, um ein Gefühl dafür zu
                bekommen, wie Webseiten strukturiert und gestaltet werden.e, um
                das Display testen zu können.
              </p>
            </h2>
            <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              <b>Status::</b> Abgeschlossen
            </p>
          </div>
          <div className="">
            <Cartica
              className="lg:mt-40 xl:mt-10"
              carticaLink={""}
              photo={"Img-Portafolio/Projekte/ImgOldCode.png"}
            ></Cartica>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
