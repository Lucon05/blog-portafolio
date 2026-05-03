import type { Route } from "./+types/home";
import Cartica from "~/components/carticas";
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

            MenuContenido2={" Projekte "}
            MCW2={"Projekte"}
            MenuContenido5={" Arbeitserfahrung "}
            MCW5={"ArbeitsErfahrung"}
          />
        </div>

        <div className=" text-[#2D2D2D]">
          <div className="flex-nowrap lg:my-20 lg:flex lg:items-center">
            <div className="m-5 p-5 lg:max-w-5/8">
              <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
                <b>Hallo! Ich bin Luis aus Venezuela.</b>
              </h2>
              <p className=" mt-10 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
           Meine Leidenschaft für die IT entstand aus der Neugier, wie Systeme im Hintergrund funktionieren. Erste Berufserfahrungen sammelte ich bei einem Praktikum auf Mallorca, wo ich in den letzten vier Wochen auch mit der Entwicklung meines eigenen Blogs begann.
              </p>
              <p className=" mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Dieses Projekt führe ich seitdem kontinuierlich fort. Ich lerne am liebsten durch direktes Ausprobieren: Ich verwalte meinen eigenen Server bei Hetzner, kümmere mich um Updates und veröffentliche dort meine Web-Projekte. Jetzt suche ich eine Ausbildung zum Fachinformatiker, um meine praktischen Erfahrungen mit professioneller Theorie zu vertiefen und in der IT-Branche voll durchzustarten.
              </p>
              
            </div>
            <div className="">
              <Cartica
                className="lg:mt-10"
                carticaLink={"Auslandspraktikum"}
                photo={"Img-Portafolio/Arbeitserfahrung/PMallorca.jpeg"}
                textCartica="Wie sah mein IT-Alltag auf der Insel aus? Ein Rückblick auf meine täglichen Wege und Erlebnisse"
                title="Auslandspraktikum"
              ></Cartica>
            </div>
          </div>
          <div className="flex-nowrap lg:mb-20 lg:flex">
            <Cartica
              className="lg:max-w-1/2"
              carticaLink={"MeinBlog"}
              photo={"Img-Portafolio/Projekte/EditPost.png"}
              textCartica="Full-Stack-System mit React und Express, das Backend läuft, das Design folgt."
              title="Web-Blog"
            ></Cartica>
            <Cartica
              className="lg:max-w-1/2"
              carticaLink={"zweiteMonitor"}
              photo={"Img-Portafolio/Projekte/display.jpeg"}
              textCartica="Secondhand-Laptopdisplay wird zu zweitem Monitor für nachhaltiges Setup."
              title="Second Life Display"
            ></Cartica>
          </div>
        </div>
      </div>
    </div>
  );
}
