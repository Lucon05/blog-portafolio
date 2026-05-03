import { Link } from "react-router";

import CardPortfolio from "~/components/CardPortfolio";

export default function ArbeitsErfahrung() {
  return (
    <div>
      <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start">Arbeitserfahrung</h1>

        <Link
          to="/"
          className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
        >
          Zurück
        </Link>
      </div>
      <div className="items-center text-[#2D2D2D] lg:mt-10 lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <Link to="/AuslandsPraktikum" className="">
            <h2 className="text-center text-2xl hover:text-[#822a34d3] sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
              <b>Auslandspraktikum</b>
            </h2>
          </Link>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Mein Praktikum auf Mallorca war sehr lehrreich und erforderte wegen
            des täglichen Arbeitswegs von zwei Stunden viel Disziplin. Nach
            einer Einführung in Linux und das Terminal lernte ich die internen
            Projektabläufe kennen. Ab der vierten Woche entwickelte ich
            eigenständig ein Full-Stack-Projekt mit React, Tailwind CSS und
            Node.js. Dabei sammelte ich wichtige Erfahrungen mit REST-APIs,
            SQL-Datenbanken und dem Deployment auf eigenen Servern.
            <Link
              className="text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
              to="/AuslandsPraktikum"
            >
              <b> Weiterlesen </b>
            </Link>
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={"AuslandsPraktikum"}
            photo={"Img-Portafolio/Arbeitserfahrung/download1.png"}
          ></CardPortfolio>
        </div>
      </div>
      <div className="lg: flex-row-reverse items-center text-[#2D2D2D] lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Praktikum beim PhoneBros</b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            In diesem Praktikum lag mein Schwerpunkt auf der technischen
            Diagnose von Geräten und der Qualitätskontrolle. Ich habe
            Reparaturaufträge entgegengenommen und für die weitere Bearbeitung
            vorbereitet. Zudem war ich für die Lagerverwaltung zuständig und
            habe Kunden zu technischen Fragen beraten. Dieser Einblick in die
            IT-Hardware hat mir geholfen, technische Abläufe besser zu
            verstehen.
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=" "
            CardPortfolioLink={""}
            photo={"Img-Portafolio/Arbeitserfahrung/Phonebros.jpeg"}
          ></CardPortfolio>
        </div>
      </div>{" "}
      <div className="items-center text-[#2D2D2D] lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Minijob Park-Gastro GbR, Leipzig </b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            In der Gastronomie habe ich ein Jahr lang das Team im Küchenbereich
            und im Spüldienst unterstützt. Diese Tätigkeit hat mir geholfen,
            meine Belastbarkeit und Teamfähigkeit unter Beweis zu stellen.
            Besonders in stressigen Zeiten habe ich gelernt, zuverlässig und
            konzentriert mit anderen zusammenzuarbeiten.
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={""}
            photo={"Img-Portafolio/Arbeitserfahrung/glashaus-leipzig-01.jpg"}
          ></CardPortfolio>
        </div>
      </div>
      <div className="flex-row-reverse text-[#2D2D2D] lg:mb-20 lg:flex lg:items-center">
        <div className="m-5 p-5 lg:max-w-4/8">
          <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
            <b>Autohaus Hagen GmbH, Leipzig </b>
          </h2>
          <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Dieses Praktikum bot mir einen Einblick in die Verwaltung und das
            Handwerk. Ich habe administrative Aufgaben im Büro übernommen und
            das Team in der Werkstatt bei verschiedenen Abläufen unterstützt.
            Dadurch konnte ich meine organisatorischen Fähigkeiten sowie mein
            technisches Interesse weiterentwickeln.
          </p>
        </div>
        <div className="">
          <CardPortfolio
            className=""
            CardPortfolioLink={""}
            photo={
              "Img-Portafolio/Arbeitserfahrung/autohaus-walter-hagen_OL.jpg"
            }
          ></CardPortfolio>
        </div>
      </div>{" "}
    </div>
  );
}
