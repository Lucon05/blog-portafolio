import { Link } from "react-router"

export default function Blog (){
    return(<div>
              <div className="items-center justify-between bg-[#722F37] p-10 text-3xl font-bold text-[#f5f5dc] sm:text-5xl md:flex md:text-6xl lg:text-7xl">
        <h1 className="text-center md:text-start">Blog</h1>


        <Link to="/AltesPortafolio"
        className="mt-5 flex items-center justify-center rounded-lg bg-[#822a34d3] px-10 py-4 text-sm text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] md:text-lg xl:text-2xl">

  Zurück
</Link>
      </div>
    </div>)
}