import { useState, useEffect } from "react";
import { Images } from "utils/images";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar: React.FC = (): JSX.Element => {
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let isTop = window.scrollY < 150;
      if (isTop !== true) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    });
  }, []);

  /* handle menu toogle */
  const handleMenuToggle = () => setShow(!show);

  return (
    <div
      className={
        scrolled
          ? "w-full p-4 lg:p-5 bg-themedark z-50"
          : "w-full p-4 lg:p-5 bg-themedark scrolled shadow-md z-50"
      }
    >
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-none">
            <img src={Images.Logo} alt="Abdullah Al Mamun" className="h-12" />
          </div>
          <div className="grow">
            <div className="grid justify-items-end">
              <div className="hidden lg:block">
                <div className="inline-flex place-items-center gap-4">
                  <NavigateButton title="Home" />
                  <NavigateButton title="About" />
                  <NavigateButton title="Skill's" />
                  <NavigateButton title="Experience's" />
                  <NavigateButton title="Portfolio" />
                </div>
              </div>
              <div className="lg:hidden ml-auto pt-[2px]">
                <MenuButton onClick={handleMenuToggle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Navigate button */
type NavigationButtonProps = {
  title: string;
};
const NavigateButton: React.FC<NavigationButtonProps> = (
  props: NavigationButtonProps
): JSX.Element => {
  return (
    <button
      type="button"
      className="px-4 py-3 transition-all uppercase text-base text-secondary hover:text-white"
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
