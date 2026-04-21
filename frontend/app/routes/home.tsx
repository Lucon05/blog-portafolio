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
            MCW1={""}
            MenuContenido2={" Projekte "}
            MCW2={""}
            MenuContenido5={" Arbeitserfahrung "}
            MCW5={""}
          />
        </div>

        <div className="">
          <div className="m-5 p-5">
            <h2 className="text-center text-2xl">
              <b>Hallo ich bin Luis</b>
            </h2>
            <p className="mt-5 text-center">
              Si cum multis loqui vis, pluribus linguis tibi discenda est.
              Linguae internationales magni momenti sunt, quia multi homines
              terrarum diversarum in orbe terrarum sunt. Sunt plus quam septem
              milia linguarum in orbe terrarum. Lingua non solum modus est
              communicationis, linguae mundos aperit. Lingua Arabica, hispanica,
              sinica, lusitanica, anglica maximi moment sunt. Multi in America
              Foederata...
            </p>
          </div>
            <div className="">
              <Cartica
                className=""
                carticaLink={""}
                photo={
                  "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
                }
                textCartica="Wie sah mein IT-Alltag auf der Insel aus? Ein Rückblick auf meine täglichen Wege und Erlebnisse"
                title="Auslandspraktikum"
              ></Cartica>
            </div>
          
          <div className="">
            <Cartica
              className=""
              carticaLink={""}
              photo={
                "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
              }
              textCartica="caramoco dembele"
              title="Auslandpracktikum"
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
