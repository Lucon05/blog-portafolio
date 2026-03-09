import { cn } from "~/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Cartica({
  className,
  photo,
  title,
  textCartica,
  carticaLink,
}: {
  className?: string;
  photo: string;
  title: string;
  textCartica: string;
  carticaLink: string;
}) {
  return (
    <div
      className={cn( 

        "flex flex-col rounded-4xl  p-4 items-center  w-auto  bg-[#722F37] hover:bg-[#A0364C] text-[#f5f5dc]",
        className,
      )}
    >
      <a href={carticaLink}>
        <div>
          <h3 className=" text-center  p-5 text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl  ">
            {title}
            
            
          
          </h3>
          <img
          src={photo}
          alt={title}
          className=" bg-white  max-w-3/3"
        />
          <p className="text-1xl sm:text-1xl md:text-1.xl text-center lg:text-2xl ">
            {textCartica}
          </p>
          
        
        </div>
      </a>
    </div>
  );
}

export default Cartica;
