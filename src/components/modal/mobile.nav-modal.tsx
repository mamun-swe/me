import { TfiClose } from "react-icons/tfi";

type PropsTypes = {
  open: boolean;
  onHide: () => void;
  homeClick: () => void;
  aboutClick: () => void;
  skillClick: () => void;
  portfolioClick: () => void;
};

export const MobileNavModal: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const backdropStyle =
    "fixed top-0 bottom-0 left-0 w-full h-screen z-50 transition-all p-4 lg:hidden visible bg-[#000000f5]";

  return (
    <div className={props.open ? backdropStyle : "hidden"}>
      <div className="text-right">
        <button
          type="button"
          className="p-3 rounded-full bg-black"
          onClick={props.onHide}
        >
          <TfiClose size={25} className="text-white" />
        </button>
      </div>
      <div className="text-center grid h-screen place-items-center -mt-12 py-6">
        <div>
          <NavigateButton title="Home" onClick={props.homeClick} />
          <NavigateButton title="About" onClick={props.aboutClick} />
          <NavigateButton title="Skill's" onClick={props.skillClick} />
          <NavigateButton title="Portfolio" onClick={props.portfolioClick} />
        </div>
      </div>
    </div>
  );
};

/* Navigate button */
type NavigateButtonProps = {
  title: string;
  onClick: () => void;
};

const NavigateButton: React.FC<NavigateButtonProps> = (
  props: NavigateButtonProps
): JSX.Element => {
  return (
    <button
      type="button"
      className="w-full p-3 mb-2 text-xl uppercase font-light text-white"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
