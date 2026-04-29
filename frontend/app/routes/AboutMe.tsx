import Cartica from "~/components/carticas";
import { Link } from "react-router";
export default function AboutMe() {
  return (
    <div>
      <div className="bg-[#722F37] p-10 flex items-center justify-between text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:text-6xl lg:text-7xl">
  <h1>Projekte</h1>


<Link
  to="/"
  className="flex items-center justify-center rounded-lg bg-[#822a34d3] px-5 py-4  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] text-sm md:text-lg   xl:text-2xl  lg:px-10 lg:py-6 "
>
  Home
</Link>
</div>
      <h2  className=" m-10  text-center text-2xl sm:text-4xl md:text-left md:text-5xl lg:text-6xl">
        <b>Hallo ich bin Luis</b>
      </h2>
      <div className="flex-nowrap lg:my-20 lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
          <p className="*: mt-5 text-center sm:text-2xl md:text-left md:text-3xl lg:text-4xl">
            Ich fange gerade erst mit IT an, weil ich wissen will, wie das alles
            im Hintergrund funktioniert. Ich lerne am besten, wenn ich Dinge
            einfach direkt ausprobiere. Deshalb baue ich gerade mein eigenes
            Blog und verwalte meinen Server bei Hetzner. Jetzt suche ich eine
            Ausbildung zum Fachinformatiker, um das Ganze richtig zu lernen und
            später in diesem Bereich zu arbeiten.
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
    </div>
  );
}
