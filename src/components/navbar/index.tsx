import { useState } from "react";
import { Images } from "utils/images";
import { AiOutlineMenu } from "react-icons/ai";
import { MobileNavModal } from "components/modal/mobile.nav-modal";

type NavbarPropsTypes = {
  home: () => void;
  about: () => void;
  skill: () => void;
  portfolio: () => void;
};

export const Navbar: React.FC<NavbarPropsTypes> = (
  props: NavbarPropsTypes
): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  /* handle menu toogle */
  const handleMenuToggle = () => setShow(!show);

  return (
    <div className={"p-4 lg:p-5 bg-themedark fixed top-0 left-0 w-full z-40"}>
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-none">
            <img src={Images.Logo} alt="Abdullah Al Mamun" className="h-12" />
          </div>
          <div className="grow">
            <div className="grid justify-items-end">
              <div className="hidden lg:block">
                <div className="inline-flex place-items-center gap-4">
                  <NavigateButton title="Home" onClick={props.home} />
                  <NavigateButton title="About" onClick={props.about} />
                  <NavigateButton title="Skill's" onClick={props.skill} />
                  <NavigateButton title="Portfolio" onClick={props.portfolio} />
                </div>
              </div>
              <div className="lg:hidden ml-auto pt-[2px]">
                <MenuButton onClick={handleMenuToggle} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar in mobile */}
      <MobileNavModal
        open={show}
        onHide={handleMenuToggle}
        homeClick={() => {
          handleMenuToggle();
          props.home();
        }}
        aboutClick={() => {
          handleMenuToggle();
          props.about();
        }}
        skillClick={() => {
          handleMenuToggle();
          props.skill();
        }}
        portfolioClick={() => {
          handleMenuToggle();
          props.portfolio();
        }}
      />
    </div>
  );
};

/* Navigate button */
type NavigationButtonProps = {
  title: string;
  onClick: () => void;
};
const NavigateButton: React.FC<NavigationButtonProps> = (
  props: NavigationButtonProps
): JSX.Element => {
  return (
    <button
      type="button"
      className="px-4 py-3 transition-all uppercase text-base text-secondary hover:text-white"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

/* Menu button */
type MenuButtonProps = {
  onClick: () => void;
};
const MenuButton: React.FC<MenuButtonProps> = (
  props: MenuButtonProps
): JSX.Element => {
  return (
    <button
      type="button"
      className="bg-primary rounded-full p-3"
      onClick={props.onClick}
    >
      <AiOutlineMenu size={20} />
    </button>
  );
};
