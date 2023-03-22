import { IPortfolio } from "types/portfolio.type";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export const PortfolioCard: React.FC<IPortfolio> = (
  props: IPortfolio
): JSX.Element => {
  return (
    <div className="rounded-lg overflow-hidden group bg-muted">
      {/* Banner */}
      {props.banner ? (
        <div className="h-[180px] overflow-hidden">
          <img
            src={require(`assets/${props.banner}`)}
            alt={props.title}
            className="object-cover min-h-[180px] transition-all grayscale group-hover:grayscale-0"
          />
        </div>
      ) : null}

      {/* Content */}
      <div className="p-4 pb-0">
        <a
          href="/#"
          target="_blank"
          className="text-2xl font-bold text-secondary transition-all group-hover:text-primary"
        >
          {props.title}
        </a>

        <p className="leading-relaxed text-sm my-3 text-secondary">
          {props.description}
        </p>
        <p className="leading-relaxed text-sm text-secondary">
          <span className="font-bold text-primary">Stacks: </span>
          {props.stack}
        </p>
      </div>

      {/* Github & Website */}
      <div className="p-4">
        <div className="inline-flex gap-1">
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full transition-all hover:text-white text-secondary bg-[#111a28]"
          >
            <RiGithubLine size={20} />
          </a>

          {props.website ? (
            <a
              href={props.website}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full transition-all hover:text-white text-secondary bg-[#111a28]"
            >
              <FiExternalLink size={20} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
