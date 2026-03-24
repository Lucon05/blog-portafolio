import type { Route } from "./+types/home";
import Cartica from "~/components/carticas";
import Footer from "~/components/footer";
import Menu from "~/components/menu";

export function meta(_metaArgs: Route.MetaArgs) {
  return [{ title: "portfolio-luis" }];
}

export default function Home() {
  return (
    <div className="bottom-0">
      <div className="flex flex-wrap">
        <div className="w-2/12">
          <Menu
            MenuContenido1={" Über mich"}
            MCW1={""}
            MenuContenido2={" Projekte "}
            MCW2={""}
            MenuContenido3={" Lebenslauf "}
            MCW3={""}
            MenuContenido4={" Sprachen "}
            MCW4={""}
            MenuContenido5={" Arbeitserfahrung "}
            MCW5={""}
          />
        </div>

        <div className="w-10/12 flex-col">
          <div className="flex w-10/10 flex-col items-end p-10">
            <h2 className="py-5 text-2xl font-bold text-[#545454] sm:text-3xl md:text-4xl lg:text-5xl">
              <b>Hallo ich bin Luis</b>
            </h2>
            <div className="flex gap-2 sm:flex-col">
              <Cartica
                className=""
                carticaLink={""}
                photo={
                  "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
                }
                textCartica="caramoco dembele"
                title="lolalolita"
              ></Cartica>
              <p className="text-1l sm:t md:text-1xl max-w-7/12 text-right text-[#545454] lg:text-3xl">
                Si cum multis loqui vis, pluribus linguis tibi discenda est.
                Linguae internationales magni momenti sunt, quia multi homines
                terrarum diversarum in orbe terrarum sunt. Sunt plus quam septem
                milia linguarum in orbe terrarum. Lingua non solum modus est
                communicationis, linguae mundos aperit. Lingua Arabica,
                hispanica, sinica, lusitanica, anglica maximi moment sunt. Multi
                in America Foederata...
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-wrap justify-end gap-8 sm:flex-col">
            <Cartica
              className="max-w-5/12"
              carticaLink={""}
              photo={
                "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-b472ba7/www.goya.com/wp-content/uploads/2023/10/arepas-cornmeal-patties.jpg"
              }
              textCartica="caramoco dembele"
              title="lolalolita"
            ></Cartica>
            <Cartica
              className="mr-16 max-w-4/12"
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
