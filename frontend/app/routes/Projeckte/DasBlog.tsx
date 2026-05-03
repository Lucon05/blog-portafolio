import { Link } from "react-router";

import CardPortfolio from "~/components/CardPortfolio";

export default function Blog() {
  return (
    <div>
      <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start">Blog</h1>

        <Link
          to="/Projekte"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Zurück
        </Link>
      </div>
      <div>
        <div className="lg:mt-14 lg:flex lg:items-center">
          <div className="m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Projektbeschreibung</b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Dieses Projekt ist ein Lernprojekt, in dem ich einen eigenen Blog
              entwickle. Ziel ist es, praktische Erfahrungen in der
              Full-Stack-Entwicklung zu sammeln und zu verstehen, wie Frontend,
              Backend und Datenbank zusammenarbeiten.
            </p>

            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Dabei beschäftige ich mich mit Themen wie API-Entwicklung,
              Datenverarbeitung und Benutzeroberflächen. Ich setze die einzelnen
              Teile selbst um, um ein besseres Verständnis für den Aufbau und
              die Funktionsweise einer kompletten Webanwendung zu bekommen.
              &nbsp;
              <Link
                to="/Blog"
                className="mt-5 text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              >
                <b>Zum Blog </b>
              </Link>
              &nbsp;/&nbsp;
              <Link
                to="/login"
                className="mt-5 text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              >
                <b>Zum Login des Blogs </b>{" "}
              </Link>
              &nbsp;
            </p>
          </div>
          <div className="">
            <CardPortfolio
              className=""
              CardPortfolioLink={"login"}
              photo={"Img-Portafolio/Projekte/ImgLoginAdminBlog.png"}
            ></CardPortfolio>
          </div>
        </div>

        <div className="flex-row-reverse lg:flex lg:items-center">
          <div className="m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Aktueller Stand</b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Das Projekt ist noch in Arbeit und wird Schritt für Schritt
              erweitert.
            </p>
            <h2 className="mt-10 text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Geplante Implementierungen</b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              - Design-Optimierung
            </p>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              - Funktionale Erweiterung
            </p>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              - Strukturelle Verbesserung
            </p>
          </div>

          <div className="">
            <CardPortfolio
              className=""
              CardPortfolioLink={"Blog"}
              photo={"Img-Portafolio/Projekte/ImgEditPostBlog.png"}
            ></CardPortfolio>
          </div>
        </div>

        <div className="lg:mb-20 lg:flex lg:items-center">
          <div className="m-5 p-5 lg:max-w-4/8">
            <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-4xl xl:text-6xl">
              <b>Verwendete Tools & Technologien</b>
            </h2>
            <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
              Für die Umsetzung dieses Projekts nutze ich verschiedene
              Technologien im Frontend und Backend. Im Frontend arbeite ich mit
              React, React Router und TypeScript, während ich im Backend
              Node.js, Express und ebenfalls TypeScript verwende. Für die
              Datenbank setze ich auf SQLite in Kombination mit Drizzle ORM, und
              die Validierung erfolgt mit Zod. Das Styling gestalte ich mit
              Tailwind CSS.
            </p>
          </div>
          <div className="">
            <CardPortfolio
              className=""
              CardPortfolioLink={"Blog"}
              photo={"Img-Portafolio/Projekte/BildEntwuerfBlog.png"}
            ></CardPortfolio>
          </div>
        </div>
      </div>
    </div>
  );
}
