import Cartica from "~/components/carticas";

export default function Projekte() {
  return (
    <div>
      <h1 className= "bg-[#722F37]  text-[#f5f5dc] p-10 text-center text-3xl sm:text-5xl md:text-left md:text-6xl lg:text-7xl">
        <b>Projeckte</b>
      </h1>

      <div className=" lg:my-20 lg:flex">
        <div className="m-5 p-5 lg:max-w-4/8">
        <h2></h2>
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
