type SectionTitlePropsTypes = {
  title: string;
};

export const SectionTitle: React.FC<SectionTitlePropsTypes> = (
  props: SectionTitlePropsTypes
): JSX.Element => {
  return (
    <div className="inline-flex gap-3">
      <div className="w-[40px] h-[1px] mt-5 bg-white" />
      <p className="font-semibold text-2xl capitalize text-white">
        {props.title}
      </p>
      <div className="w-[40px] h-[1px] mt-5 bg-white" />
    </div>
  );
};
