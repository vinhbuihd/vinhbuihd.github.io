import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const BackToTop = () => {
  useEffect(() => {
    const goTop = document.querySelector(".gotop");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 500) {
        goTop.style.visibility = "unset";
      } else {
        goTop.style.visibility = "hidden";
      }
    });
  }, []);

  const handleClickGoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="gotop d-flex align-items-center justify-content-center"
      onClick={handleClickGoTop}
    >
      <AiOutlineArrowUp />
    </div>
  );
};

export default BackToTop;
