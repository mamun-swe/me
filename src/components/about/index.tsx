import { Images } from "utils/images";
import { PrimaryButton } from "components/button";
import { SectionTitle } from "components/section-title";
import { resumeView } from "utils/helper";

type PropsTypes = {
  refProp: any;
  skill: () => void;
};

export const About: React.FC<PropsTypes> = (props: PropsTypes): JSX.Element => {
  return (
    <div className="py-20 lg:py-28" ref={props.refProp}>
      <div className="container mx-auto px-6 sm:px-0">
        <div className="mb-4 text-center lg:text-left">
          <SectionTitle title="About" />
          <p className="text-lg capitalize text-primary">Abdullah Al Mamun</p>
        </div>
        <div className="lg:flex gap-12">
          <div className="flex-none  mb-12 lg:mb-0">
            <div className="!w-[280px] sm:!w-[395px] overflow-hidden rounded-md mx-auto lg:ml-auto">
              <img
                src={Images.About}
                alt="About Abdullah Al Mamun"
                className="min-w-full transition-all grayscale hover:grayscale-0"
              />
            </div>
          </div>

          {/* Abount content */}
          <div className="grow">
            <ContentText
              className=""
              text="Abdullah Al Mamun is a highly skilled and experienced Software
            Engineer who has distinguished himself in the software development
            industry. He completed his bachelor's degree in Software Engineering
            from Daffodil International University in 2023. He has experience in a variety of fields, including ..."
            />
            <ul className="list-disc pl-5 my-4 text-secondary">
              <li>
                <ContentText text="B2B-B2C marketplace." />
              </li>
              <li>
                <ContentText text="On-demand platforms for the delivery of food, groceries, and medicines." />
              </li>
              <li>
                <ContentText text="E-commerce, E-learning, Road Transport Tech." />
              </li>
              <li>
                {" "}
                <ContentText text="Messaging platforms, and Customer Support (also known as CRM)." />
              </li>
              <li>
                <ContentText text="Job portals, Reseller platforms, and Healthcare." />
              </li>
            </ul>

            <ContentText
              className="mb-8"
              text="Which has allowed him to amass a broad range of skills and knowledge. He has proven his mastery of programming languages, development processes, and software design and architecture throughout his career. One of Abdullah's greatest strengths is his ability to understand complex problems and develop innovative solutions to solve them. He has extensive experience in building scalable and high-performance software systems, which has enabled him to develop efficient and effective solutions for his clients."
            />

            {/* Button group */}
            <div className="flex justify-center lg:justify-start gap-4">
              <PrimaryButton type="button" filled onClick={() => resumeView()}>
                My Resume
              </PrimaryButton>

              <PrimaryButton type="button" onClick={props.skill}>
                My Skill's
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Content text */
type ContentTextProps = {
  text: string;
  className?: string;
};
const ContentText: React.FC<ContentTextProps> = (
  props: ContentTextProps
): JSX.Element => {
  return (
    <p
      className={`text-[17px] leading-relaxed break-after-auto text-secondary ${props.className}`}
    >
      {props.text}
    </p>
  );
};
