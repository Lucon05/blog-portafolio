import { Link } from "react-router";

import CardPortfolio from "~/components/CardPortfolio";

export default function Projekte() {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Projekte</h1>

        <Link
          to="/"
          className="flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Zurück
        </Link>
      </div>
      <div className="items-center text-[#2D2D2D] lg:mt-20 lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <Link to="/DasBlog" className="">
            <h2 className="text-center text-2xl hover:text-[#822a34d3] sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Blog</b>
            </h2>
          </Link>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Dieses Projekt ist ein Lernprojekt, in dem ich einen eigenen Blog
            entwickle. Ziel ist es, praktische Erfahrungen in der
            Full-Stack-Entwicklung zu sammeln und die verschiedenen Bereiche
            miteinander zu verbinden.
            <Link
              className="text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              to="/DasBlog"
            >
              <b> Weiterlesen </b>
            </Link>
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={"DasBlog"}
            photo={"Img-Portafolio/Projekte/BildEntwuerfBlog.png"}
          ></CardPortfolio>
        </div>
      </div>
      <div className="flex-row-reverse text-[#2D2D2D] lg:flex lg:items-center">
        <div className="m-5 p-5 lg:max-w-4/8">
          <Link to="/ZweiterMonitor" className="">
            <h2 className="text-center text-2xl hover:text-[#822a34d3] sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Second Life Display</b>
            </h2>
          </Link>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            In diesem Projekt gebe ich alter Hardware ein zweites Leben. Aus dem
            Display eines defekten Laptops mache ich einen externen Monitor. Die
            Idee dahinter ist einfach: Ich brauchte einen zweiten Bildschirm,
            wollte aber keine neue Hardware kaufen. Statt den alten Laptop
            wegzuwerfen, nutze ich die Teile weiter und setze sie sinnvoll ein.
            <Link
              className="mt-5 text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              to="/ZweiterMonitor"
            >
              <b> Weiterlesen </b>
            </Link>
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={"ZweiterMonitor"}
            photo={"Img-Portafolio/Projekte/ImgOldDispaly2.jpg"}
          ></CardPortfolio>
        </div>
      </div>
      <div className="mb-14 text-[#2D2D2D] lg:flex lg:items-center">
        <div className="m-5 p-5 lg:max-w-4/8">
          <Link to="/AltesPortafolio" className="">
            <h2 className="text-center text-2xl hover:text-[#822a34d3] sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Altes Portfolio</b>
            </h2>
          </Link>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Dieses Projekt war mein erstes Portfolio, das ich während meiner
            Zeit bei der Azubi Digital Akademie erstellt habe. Damals habe ich
            gerade erst angefangen, HTML und CSS zu lernen.
            <Link
              className="mt-5 text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              to="/AltesPortafolio"
            >
              <b> Weiterlesen </b>
            </Link>
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={"AltesPortafolio"}
            photo={"Img-Portafolio/Projekte/ImgOldPortafolio.png"}
          ></CardPortfolio>
        </div>
      </div>
    </div>
  );
}
