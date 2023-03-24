import { PortfolioCard } from "components/card/portfolio.card";
import { SectionTitle } from "components/section-title";
import { IPortfolio } from "types/portfolio.type";
import { PrimaryButton } from "components/button";
import portfolioData from "json/portfolio.json";
import socialLinks from "json/social-link.json";

type PropsTypes = {
  refProp: any;
};

export const Portfolio: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const data: IPortfolio[] = portfolioData;

  return (
    <div className="py-20 lg:py-28" ref={props.refProp}>
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

        {/* Browse More button */}
        <div className="text-center mt-14">
          <a
            href={`${socialLinks.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            <PrimaryButton type="button">Browse More</PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};
