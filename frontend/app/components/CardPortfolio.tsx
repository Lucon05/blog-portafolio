import { cn } from "~/lib/cn";

function CardPortfolio({
  className,
  photo,
  title,
  textCardPortfolio,
  CardPortfolioLink,
}: {
  className?: string;
  photo?: string;
  title?: string;
  textCardPortfolio?: string;
  CardPortfolioLink?: string;
}) {
  return (
    <div
      className={cn(
        "m-5 flex w-auto flex-col items-center rounded-4xl bg-[#722F37] p-4 text-[#f5f5dc] hover:bg-[#A0364C]",
        className,
      )}
    >
      <a href={CardPortfolioLink}>
        <div>
          <h3 className="p-5 text-center text-2xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <img src={photo} alt={title} className="max-w-3/3 bg-white" />
          <p className="text-1xl sm:text-1xl md:text-1.xl pt-5 text-center lg:text-2xl">
            {textCardPortfolio}
          </p>
        </div>
      </a>
    </div>
  );
}

export default CardPortfolio;
