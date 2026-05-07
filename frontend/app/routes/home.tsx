import type { Route } from "./+types/home";
import CardPortfolio from "~/components/CardPortfolio";
import Menu from "~/components/menu";

export function meta(_metaArgs: Route.MetaArgs) {
  return [{ title: "portfolio-luis" }];
}

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Menu
            Inhalt2={" Projekte "}
            MCW2={"Projekte"}
            Inhalt5={" Arbeitserfahrung "}
            MCW5={"ArbeitsErfahrung"}
          />
        </div>

        <div className="text-[#2D2D2D]">
          <div className="flex-nowrap lg:my-20 lg:flex lg:items-center">
            <div className="m-5 p-5 lg:max-w-5/8">
              <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
                <b>Hallo! Ich bin Luis aus Venezuela.</b>
              </h2>
              <p className="mt-10 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Meine Leidenschaft für die IT entstand aus der Neugier zu
                verstehen, wie komplexe Systeme im Hintergrund funktionieren.
                Ich lebe seit sechs Jahren in Deutschland und verfüge über sehr
                gute Deutschkenntnisse. Da Spanisch meine Muttersprache ist,
                kann ich mich zudem sicher in einem internationalen Umfeld
                bewegen; grundlegende Englischkenntnisse bringe ich ebenfalls
                mit.
              </p>
              <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">  Praxiserfahrungen sammelte ich während eines zweimonatigen Praktikums auf Mallorca. Dort begann ich in den letzten vier Wochen mit der Entwicklung meines eigenen Blogs</p>
              <p className="mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">

                Dieses Projekt führe ich seitdem kontinuierlich weiter. Ich
                lerne am liebsten durch direktes Ausprobieren: Ich verwalte
                meinen eigenen Server bei Hetzner, kümmere mich um Updates und
                veröffentliche dort meine Web-Projekte, wie dieses Portfolio
                oder meinen Blog. Dabei arbeite ich mit Technologien wie React,
                TypeScript, SQL, Node.js, Express und Tailwind CSS und probiere
                regelmäßig neue Dinge aus. Jetzt suche ich eine Ausbildung zum
                Fachinformatiker für Anwendungsentwicklung, um meine praktischen
                Erfahrungen mit professionellem Fachwissen zu verbinden und mich
                in der IT-Branche weiterzuentwickeln.
              </p>
            </div>
            <div className="">
              <CardPortfolio
                className="lg:mt-10"
                CardPortfolioLink={"Auslandspraktikum"}
                photo={"Img-Portafolio/Arbeitserfahrung/PMallorca.jpeg"}
                textCardPortfolio="Wie sah mein IT-Alltag auf der Insel aus? Ein Rückblick auf meine täglichen Wege und Erlebnisse"
                title="Auslandspraktikum"
              ></CardPortfolio>
            </div>
          </div>
          <div className="flex-nowrap lg:mb-20 lg:flex">
            <CardPortfolio
              className="lg:max-w-1/2"
              CardPortfolioLink={"DasBlog"}
              photo={"Img-Portafolio/Projekte/EditPost.png"}
              textCardPortfolio="Full-Stack-System mit React und Express, das Backend läuft, das Design folgt."
              title="Web-Blog"
            ></CardPortfolio>
            <CardPortfolio
              className="lg:max-w-1/2"
              CardPortfolioLink={"ZweiterMonitor"}
              photo={"Img-Portafolio/Projekte/display.jpeg"}
              textCardPortfolio="Secondhand-Laptopdisplay wird zu zweitem Monitor für nachhaltiges Setup."
              title="Second Life Display"
            ></CardPortfolio>
          </div>
        </div>
      </div>
    </div>
  );
}
