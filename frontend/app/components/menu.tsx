function Menu({

  MenuContenido2,
 
  MenuContenido5,
  MCW5,

  MCW2,

}: {
  
  MenuContenido2: string;
  MenuContenido5: string;
  MCW5: string;
  
  MCW2: string;
  
}) {
  return (
    <div className="">
      
        <div className="  flex-row items-center bg-[#722F37] to-0% shadow-lg">
          <nav className="">
            <div className="">
              

            
              

               <b> <a className="pt-1 pb-1  sm:text-xs,pt-3 md:text-2xl lg:text-4xl  flex w-12/12 items-center justify-center rounded-lg  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C]  lg:p-4 " href={MCW2}>
                  {MenuContenido2}
                </a></b>
              

              

                <b><a className="pt-1 pb-1  sm:text-xs,pt-3 md:text-2xl l2xl:4xl flex w-12/12 items-center justify-center rounded-lg  text-[#F5F5DC] shadow-md transition-colors hover:bg-[#A0364C] lg:text-4xl lg:p-4 " href={MCW5}>
                  {MenuContenido5}
                </a></b>
            
            </div>
          </nav>
        </div>
      
    </div>
  );
}

export default Menu;
