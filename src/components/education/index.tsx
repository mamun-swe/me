import React from "react";
import { SectionTitle } from "components/section-title";
import { EducationCard } from "components/card/education.card";
import education_data from "json/education.json";

type PropsTypes = {
  refProp: any;
};

export const Education: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="py-20 lg:py-28" ref={props.refProp}>
      <div className="container mx-auto px-6 sm:px-0">
        <div className="mb-8 lg:mb-6 text-center lg:text-left">
          <SectionTitle title="Education" />
        </div>

        {education_data.map((item, i) => (
          <EducationCard
            key={i}
            {...item}
            is_end={education_data.length === i + 1}
          />
        ))}
      </div>
    </div>
  );
};
