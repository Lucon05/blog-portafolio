
function Menu({
  
  MenuContenido1,
  MenuContenido2,
  MenuContenido3,
  MenuContenido4,
  MenuContenido5,
  MCW5,
  MCW1,
  MCW2,
  MCW3,
  MCW4,
}: {
  
  
  MenuContenido1: string;
  MenuContenido2: string;
  MenuContenido3: string;
  MenuContenido4: string;
  MenuContenido5: string;
  MCW5: string;
  MCW1: string;
  MCW2: string;
  MCW3: string;
  MCW4: string;
}) {
  return (
    <div className="">
      <div className="">
      <aside className="fixed to-0% left-0 h-screen  flex-col items-center bg-[#722F37]  shadow-lg">
        <nav className="flex flex-1 flex-col" >
          <div className="mt-30 ">
            <button className=" pt-8 pb-8 flex   justify-center rounded-lg text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] 
            w-12/12
            sm:text-sx,pt-4 md:text-md lg:text-lg xl:text-3xl l2xl:4xl">
              <a className=" text-[#f5f5dc]" href={MCW4}>
                {MenuContenido4}

              </a>
            </button>

            <button className=" pt-8 pb-8 flex  items-center justify-center 
            w-12/12 rounded-lg text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C]
            sm:text-xs,pt-4 md:text-md lg:text-lg xl:text-3xl l2xl:4xl">
              <a className=" text-[#f5f5dc]" href={MCW1}>
                {MenuContenido1}

              </a>
            </button>

            <button className=" pt-8 pb-8 flex w-12/12 items-center justify-center rounded-lg text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C]
            sm:text-xs,pt-4 md:text-md lg:text-lg xl:text-3xl l2xl:4xl">
              <a className=" text-[#f5f5dc]" href={MCW2}>
                {MenuContenido2}

              </a>
            </button>

            <button className=" pt-8 pb-8 flex w-12/12 items-center justify-center rounded-lg text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C]
            sm:text-xs,pt-4 md:text-md lg:text-lg xl:text-3xl l2xl:4xl">
              <a className=" text-[#f5f5dc]" href={MCW3}>
                {MenuContenido3}

              </a>
            </button>

            <button className=" pt-8 pb-8 flex w-12/12 items-center justify-center rounded-lg text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C]
            sm:text-xs,pt-4 md:text-md lg:text-lg xl:text-3xl l2xl:4xl">
              <a className=" text-[#f5f5dc]" href={MCW5}>
                {MenuContenido5}

              </a>
            </button>
              
          </div>
        </nav>
      </aside>
      </div>
    </div>
  );
}

export default Menu;
