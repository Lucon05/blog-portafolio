import { Link } from "react-router";

import CardPortfolio from "~/components/CardPortfolio";

export default function AuslandsPraktikum() {
  return (
    <div>
      <div>
        <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
          <h1 className="text-center md:text-start"> Auslandspraktikum</h1>
          <Link
            to="/ArbeitsErfahrung"
            className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl"
          >
            Zurück
          </Link>
        </div>
        <div>
          <div className="text-[#2D2D2D] lg:mt-14 lg:flex lg:items-center">
            <div className="m-5 p-5 lg:max-w-4/8">
              <p className="mt-5 text-center text-[#2D2D2D] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
                Mein Praktikum auf Mallorca war eine sehr lehrreiche Zeit, die
                mir viel Disziplin abverlangt hat. Da ich in Santa Ponça wohnte,
                aber in Santa Maria del Camí arbeitete, war ich täglich über
                zwei Stunden unterwegs. Trotzdem habe ich meine Arbeitszeit von
                11:00 bis 19:00 Uhr immer zuverlässig eingehalten.
              </p>
            </div>
            <div className="">
              <CardPortfolio
                className=""
                photo={"Img-Portafolio/Arbeitserfahrung/WegzurArbeit.png"}
              ></CardPortfolio>
            </div>
          </div>

          <div className="flex-row-reverse text-[#2D2D2D] lg:flex lg:items-center">
            <div className="m-5 p-5 lg:max-w-4/8">
              <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
                In der ersten Woche habe ich mich intensiv mit der
                Systemadministration beschäftigt, Linux Ubuntu installiert und
                die Arbeit mit dem Terminal gelernt. Nach zwei Wochen, in denen
                ich die internen Projektabläufe der Firma kennenlernen durfte,
                startete ich in der vierten Woche mein Full-Stack-Projekt: Ein
                persönliches Portfolio mit Blog-Funktion auf Basis von React,
                Tailwind CSS und Node.js. Besonders spannend war dabei die
                Arbeit an der REST-API, der SQL-Datenbank und dem Login-System.
                Das Projekt läuft bereits erfolgreich auf meinem eigenen Server.
              </p>
            </div>
            <div className="">
              <CardPortfolio
                className=""
                photo={"Img-Portafolio/Arbeitserfahrung/PMallorca.jpeg"}
              ></CardPortfolio>
            </div>
          </div>

          <div className="text-[#2D2D2D] lg:mb-20 lg:flex lg:items-center">
            <div className="lgmt-40 m-5 p-5 lg:max-w-4/8">
              <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl">
                <b>Hinweis: </b> Die Blog-Funktion befindet sich aktuell noch in
                der aktiven Bearbeitung.{" "}
                <Link
                  className="text-center hover:text-[#822a34d3] sm:text-2xl md:text-left md:text-3xl lg:text-2xl xl:text-4xl"
                  to="/DasBlog"
                >
                  <b>
                    Mehr Informationen zum aktuellen Stand des Blogs findest du
                    hier.
                  </b>
                </Link>
              </p>
            </div>
            <div className="">
              <CardPortfolio
                className=""
                photo={"Img-Portafolio/Arbeitserfahrung/download1.png"}
              ></CardPortfolio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
