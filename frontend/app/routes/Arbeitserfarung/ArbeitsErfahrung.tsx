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
      <div className="lg:my-20 lg:flex">
        <div className="m-5 p-5 lg:mt-20 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Auslandpracktikum</b>
          </h2>
          <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Ich fange gerade erst mit IT an, weil ich wissen will, wie das alles
            im Hintergrund funktioniert. Ich lerne am besten, wenn ich Dinge
            einfach direkt ausprobiere. Deshalb baue ich gerade mein eigenes
            Blog und verwalte meinen Server bei Hetzner. Jetzt suche ich eine
            Ausbildung zum Fachinformatiker, um das Ganze richtig zu lernen und
            später in diesem Bereich zu arbeiten.
            <Link to="/Blog">weiter lesen</Link>
          </p>
        </div>
        <div className="">
          <Cartica
            className="lg:mt-40 lg:justify-items-center xl:mt-10"
            carticaLink={""}
            photo={"Img-Portafolio/BildEntwürfBlog.png"}
          ></Cartica>
        </div>
      </div>
      <div className="flex-row-reverse lg:my-20 lg:flex">
        <div className="m-5 p-5 lg:mt-40 lg:max-w-4/8">
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
            className="lg:mt-40 xl:mt-10"
            carticaLink={""}
            photo={"Img-Portafolio/Phonebros.jpeg"}
          ></Cartica>
        </div>
      </div>{" "}
      <div className="lg:my-20 lg:flex">
        <div className="m-5 p-5 lg:mt-50 lg:max-w-4/8">
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
            className="lg:mt-40 xl:mt-10"
            carticaLink={""}
            photo={"Img-Portafolio/glashaus-leipzig-01.jpg"}
          ></Cartica>
        </div>
      </div>
      <div className="flex-row-reverse lg:my-20 lg:flex">
        <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
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
            className="lg:mt-40 xl:mt-10"
            carticaLink={""}
            photo={"Img-Portafolio/autohaus-walter-hagen_OL.jpg"}
          ></Cartica>
        </div>
      </div>{" "}
    </div>
  );
}
