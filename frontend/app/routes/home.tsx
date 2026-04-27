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
            MenuContenido1={" Über mich "}
            MCW1={"AboutMe"}
            MenuContenido2={" Projekte "}
            MCW2={"Projekte"}
            MenuContenido5={" Arbeitserfahrung "}
            MCW5={"ArbeitsErfahrung"}
          />
        </div>

        <div className="">
          <div className="flex-nowrap lg:my-20 lg:flex">
            <div className="m-5 p-5 lg:max-w-4/8">
              <h2 className="text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
                <b>Hallo ich bin Luis</b>
              </h2>
              <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
                Ich fange gerade erst mit IT an, weil ich wissen will, wie das
                alles im Hintergrund funktioniert. Ich lerne am besten, wenn ich
                Dinge einfach direkt ausprobiere. Deshalb baue ich gerade mein
                eigenes Blog und verwalte meinen Server bei Hetzner. Jetzt suche
                ich eine Ausbildung zum Fachinformatiker, um das Ganze richtig
                zu lernen und später in diesem Bereich zu arbeiten.
              </p>
            </div>
            <div className="">
              <Cartica
                className="lg:mt-40 xl:mt-10"
                carticaLink={""}
                photo={
                  "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
                }
                textCartica="Wie sah mein IT-Alltag auf der Insel aus? Ein Rückblick auf meine täglichen Wege und Erlebnisse"
                title="Auslandspraktikum"
              ></Cartica>
            </div>
          </div>
          <div className="flex-nowrap md:flex lg:mb-30">
            <Cartica
              className=""
              carticaLink={""}
              photo={
                "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
              }
              textCartica=""
              title="Web-Blog"
            ></Cartica>
            <Cartica
              className=""
              carticaLink={""}
              photo={
                "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
              }
              textCartica="caramoco dembele"
              title="lolalolita"
            ></Cartica>
          </div>
        </div>
      </div>
    </div>
  );
}
