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
        "m-5 flex w-auto flex-col items-center rounded-4xl bg-[#722F37] p-4 text-[#f5f5dc] hover:bg-[#A0364C]",
        className,
      )}
    >
      <a href={carticaLink}>
        <div>
          <h3 className="p-5 text-center text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <img src={photo} alt={title} className="max-w-3/3 bg-white" />
          <p className="text-1xl sm:text-1xl md:text-1.xl pt-5 text-center lg:text-2xl">
            {textCartica}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Cartica;
