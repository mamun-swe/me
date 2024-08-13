
import React from "react";
import { SectionTitle } from "components/section-title";
import { WorkCard } from "components/card/work.card";
import work_experience_data from "json/work-experience.json";

type PropsTypes = {
  refProp: any;
};

export const WorkExperience: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="py-20 lg:py-28" ref={props.refProp}>
      <div className="container mx-auto px-6 sm:px-0">
        <div className="mb-8 lg:mb-6 text-center lg:text-left">
          <SectionTitle title="Work Experience" />
        </div>

        {work_experience_data.map((item, i) => (
          <WorkCard
            key={i}
            {...item}
            is_end={work_experience_data.length === i + 1}
          />
        ))}
      </div>
    </div>
  );
};
