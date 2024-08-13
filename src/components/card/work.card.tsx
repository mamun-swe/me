import { FC } from "react";

type PropsTypes = {
  designation: string;
  organization: string;
  website: string;
  start_from: string;
  end_to: string;
  location: string;
  responsibilities: string[];
  tech_stacks: string[];
  is_end: boolean;
};

export const WorkCard: FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex-none">
        <div className="w-3 h-3 rounded-full bg-white" />
        <div className="w-[1px] h-72 ml-[5px] bg-white" />
        {props.is_end ? (
          <div className="w-3 h-3 rounded-full bg-white" />
        ) : null}
      </div>
      <div className="grow pl-4">
        <p className="text-lg font-bold text-primary">{props.designation}</p>
        <p className="mb-1 text-base font-bold transition-all hover:text-primary cursor-pointer text-secondary">
          <a href={props.website} target="_blank" rel="noreferrer">
            {props.organization}
          </a>
        </p>
        <p className="text-sm mb-1 text-secondary">{props.location}</p>
        <p className="text-sm text-secondary">
          [{props.start_from}-{props.end_to}]
        </p>
        {props.responsibilities && props.responsibilities.length ? (
          <div className="py-1 pl-1 text-secondary">
            {props.responsibilities.map((item, i) => (
              <p key={i}>- {item}</p>
            ))}
          </div>
        ) : null}

        {props.tech_stacks && props.tech_stacks.length ? (
          <div className="inline-flex text-secondary">
            <p className="font-semibold">Texh/Stacks: </p>
            <p className="ml-2">{props.tech_stacks.join(", ")}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};
