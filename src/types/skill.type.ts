export interface ISkill {
  title: string;
  children: ISkillChildren[];
}

export interface ISkillChildren {
  title: string;
  growth: number;
}
