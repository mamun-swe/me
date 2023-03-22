import { PortfolioCard } from "components/card/portfolio.card";
import { SectionTitle } from "components/section-title";
import { IPortfolio } from "types/portfolio.type";
import portfolioData from "json/portfolio.json";

export const Portfolio: React.FC = (): JSX.Element => {
  const data: IPortfolio[] = portfolioData;

  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="mb-8 lg:mb-6 text-center lg:text-left">
          <SectionTitle title="Portfolio" />
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <PortfolioCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
