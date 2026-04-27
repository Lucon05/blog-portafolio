function Menu({
  MenuContenido1,
  MenuContenido2,
 
  MenuContenido5,
  MCW5,
  MCW1,
  MCW2,

}: {
  MenuContenido1: string;
  MenuContenido2: string;
  MenuContenido5: string;
  MCW5: string;
  MCW1: string;
  MCW2: string;
  
}) {
  return (
    <div className="">
      
        <div className="  flex-row items-center bg-[#722F37] to-0% shadow-lg">
          <nav className="">
            <div className="">
              

              
                <a className="pt-1 pb-1  sm:text-xs,pt-3 md:text-md l2xl:4xl flex w-12/12 items-center justify-center rounded-lg  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] lg:text-lg xl:text-3xl " href={MCW1}>
                  {MenuContenido1}
                </a>
              

                <a className="pt-1 pb-1  sm:text-xs,pt-3 md:text-md l2xl:4xl flex w-12/12 items-center justify-center rounded-lg  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] lg:text-lg xl:text-3xl " href={MCW2}>
                  {MenuContenido2}
                </a>
              

              

                <a className="pt-1 pb-1  sm:text-xs,pt-3 md:text-md l2xl:4xl flex w-12/12 items-center justify-center rounded-lg  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] lg:text-lg xl:text-3xl " href={MCW5}>
                  {MenuContenido5}
                </a>
            
            </div>
          </nav>
        </div>
      
    </div>
  );
}

export default Menu;
