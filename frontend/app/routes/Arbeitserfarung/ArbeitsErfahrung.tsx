import { Link } from "react-router";

import Cartica from "~/components/carticas";

export default function ArbeitsErfahrung() {
  return (
    <div>
      <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start">Arbeitserfahrung</h1>

        <Link
          to="/"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Home
        </Link>
      </div>
      <div className="  items-center text-[#2D2D2D] lg:mt-10 lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Auslandpracktikum</b>
          </h2>
          <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Dieses Projekt ist ein Lernprojekt, in dem ich einen eigenen Blog
            entwickle. Ziel ist es, praktische Erfahrungen in der
            Full-Stack-Entwicklung zu sammeln und zu verstehen, wie Frontend,
            Backend und Datenbank zusammenarbeiten.
            <Link to="/AuslandsPraktikum"> Weiter lesen</Link>
          </p>
        </div>
        <div className="">
          <Cartica
            className="lg:ml-50"
            carticaLink={""}
            photo={"Img-Portafolio/Arbeitserfahrung/download1.png"}
          ></Cartica>
        </div>
      </div>
      <div className="lg: flex-row-reverse items-center text-[#2D2D2D] lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Pracktikum PhoneBros</b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            In diesem Projekt gebe ich alter Hardware ein zweites Leben. Aus dem
            Display eines kaputten Laptops mache ich einen externen Monitor. Die
            Idee dahinter ist einfach: Ich brauchte einen zweiten Bildschirm,
            wollte aber keine neue Hardware kaufen. Statt das alte Laptop
            wegzuwerfen, nutze ich die Teile weiter und setze sie sinnvoll ein.
          </p>
        </div>
        <div className="">
          <Cartica
            className=" "
            carticaLink={""}
            photo={"Img-Portafolio/Arbeitserfahrung/Phonebros.jpeg"}
          ></Cartica>
        </div>
      </div>{" "}
      <div className="items-center text-[#2D2D2D] lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Minijob Park-Gastro GbR, Leipzig </b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Dieses Projekt war mein erstes Portfolio, das ich während meiner
            Zeit bei der Azubi Digital Akademie erstellt habe. Damals habe ich
            gerade erst angefangen, HTML und CSS zu lernen.
          </p>
        </div>
        <div className="">
          <Cartica
            className=""
            carticaLink={""}
            photo={"Img-Portafolio/Arbeitserfahrung/glashaus-leipzig-01.jpg"}
          ></Cartica>
        </div>
      </div>
      <div className="flex-row-reverse text-[#2D2D2D] lg:mb-20 lg:flex lg:items-center">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Autohaus Hagen GmbH, Leipzig </b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            In diesem Projekt gebe ich alter Hardware ein zweites Leben. Aus dem
            Display eines kaputten Laptops mache ich einen externen Monitor. Die
            Idee dahinter ist einfach: Ich brauchte einen zweiten Bildschirm,
            wollte aber keine neue Hardware kaufen. Statt das alte Laptop
            wegzuwerfen, nutze ich die Teile weiter und setze sie sinnvoll ein.
          </p>
        </div>
        <div className="">
          <Cartica
            className=""
            carticaLink={""}
            photo={
              "Img-Portafolio/Arbeitserfahrung/autohaus-walter-hagen_OL.jpg"
            }
          ></Cartica>
        </div>
      </div>{" "}
    </div>
  );
}
