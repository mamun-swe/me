import { useState } from "react";
import { ISkill, ISkillChildren } from "types/skill.type";
import { TabButton } from "components/button";
import skillsData from "json/skills.json";
import { SkillCard } from "components/card/skill.card";
import { SectionTitle } from "components/section-title";

const items: ISkill[] = skillsData;

export const Skills: React.FC = (): JSX.Element => {
  const [selected, setSelected] = useState<string>(items[0].title);
  const [selectedSkills, setSelectedSkills] = useState<ISkillChildren[]>(
    items[0].children
  );

  /* handle selection */
  const handleSelection = (value: string) => {
    setSelected(value);
    const result = items.find((x) => x.title === value);
    if (result) setSelectedSkills(result.children);
  };

  return (
    <div className="py-20 lg:py-28">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="mb-4 text-center lg:text-left">
          <SectionTitle title="My Skill's" />
        </div>

        {/* Tab buttons & Content section */}
        <div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            {items.map((item, i) => (
              <TabButton
                key={i}
                type="button"
                isActive={selected === item.title}
                onClick={() => handleSelection(item.title)}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          {/* Content section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedSkills.map((item, i) => (
              <SkillCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
