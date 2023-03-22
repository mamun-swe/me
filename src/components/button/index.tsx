import { ReactNode } from "react";

/* Primary button */
type ButtonPropsTypes = {
  type: "button" | "submit";
  children: ReactNode;
  filled?: boolean;
};

export const PrimaryButton: React.FC<ButtonPropsTypes> = (
  props: ButtonPropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      className={
        props.filled
          ? "text-base font-semibold px-8 py-[10px] rounded bg-primary"
          : "text-base font-semibold px-8 py-[10px] rounded border-2 border-primary text-white bg-themedark"
      }
    >
      {props.children}
    </button>
  );
};

/* Tab button */
type TabButtonPropsTypes = {
  type: "button" | "submit";
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

export const TabButton: React.FC<TabButtonPropsTypes> = (
  props: TabButtonPropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      className={`text-[15px] font-semibold px-5 py-[6px] rounded border-2 transition-all border-primary  ${
        props.isActive ? "bg-primary text-black" : "bg-themedark text-white"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

/* Circle Icon button */
type CircleIconButtonPropsTypes = {
  type: "button" | "submit";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export const CircleIconButton: React.FC<CircleIconButtonPropsTypes> = (
  props: CircleIconButtonPropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      className="shadow-xl rounded-full p-3 transition-all bg-muted hover:bg-primary text-primary hover:text-black"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
