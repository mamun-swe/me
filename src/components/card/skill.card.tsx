import { ISkillChildren } from "types/skill.type";

export const SkillCard: React.FC<ISkillChildren> = (
  props: ISkillChildren
): JSX.Element => {
  return (
    <div className="rounded overflow-hidden bg-muted">
      <div className="flex justify-between p-5">
        <p className="text-xl font-semibold text-secondary">{props.title}</p>
        <p className="text-base font-bold rounded-md px-2 py-1 text-themedark bg-primary">
          {props.growth}%
        </p>
      </div>
      <div
        className="rounded-full h-2 bg-primary"
        style={{ width: `${props.growth}%` }}
      />
    </div>
  );
};
