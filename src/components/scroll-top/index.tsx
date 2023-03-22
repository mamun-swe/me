import { useState, useEffect } from "react";
import { CircleIconButton } from "components/button";
import { BsArrowUp } from "react-icons/bs";

export const ScrollTop: React.FC = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let isTop = window.scrollY > 400;
      if (isTop !== true) setShow(false);
      else setShow(true);
    });
  }, []);

  /* handle scroll */
  const handleScroll = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed z-20 bottom-6 lg:bottom-10 right-6 lg:right-10 transition-all">
      {show ? (
        <CircleIconButton type="button" onClick={() => handleScroll()}>
          <BsArrowUp size={21} />
        </CircleIconButton>
      ) : null}
    </div>
  );
};
