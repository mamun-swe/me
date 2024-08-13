import { FC } from "react";

type PropsTypes = {
  degree: string;
  institiute: string;
  location: string;
  start_from: string;
  end_to: string;
  is_end: boolean;
};

export const EducationCard: FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex-none">
        <div className="w-3 h-3 rounded-full bg-white" />
        <div className="w-[1px] h-28 ml-[5px] bg-white" />
        {props.is_end ? (
          <div className="w-3 h-3 rounded-full bg-white" />
        ) : null}
      </div>
      <div className="grow pl-4">
        <p className="text-lg font-bold text-primary">{props.degree}</p>
        <p className="text-base text-secondary">{props.institiute}</p>
        <p className="text-sm mb-1 text-secondary">{props.location}</p>
        <p className="text-sm text-secondary">
          [{props.start_from}-{props.end_to}]
        </p>
      </div>
    </div>
  );
};
