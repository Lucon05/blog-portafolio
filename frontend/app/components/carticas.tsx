import { cn } from "~/lib/cn";

function Cartica({
  className,
  photo,
  title,
  textCartica,
  carticaLink,
}: {
  className?: string;
  photo?: string;
  title?: string;
  textCartica?: string;
  carticaLink?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-auto flex-col items-center rounded-4xl bg-[#722F37] p-4 text-[#f5f5dc] hover:bg-[#A0364C] m-5",
        className,
      )}
    >
      <a href={carticaLink}>
        <div>
          <h3 className="p-5 text-center text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <img src={photo} alt={title} className="max-w-3/3 bg-white" />
          <p className="pt-5 text-1xl sm:text-1xl md:text-1.xl text-center lg:text-2xl">
            {textCartica}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Cartica;
