import { Link } from "react-router-dom";
import { PAGES_PATH } from "src/router";

const Menu = () => {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 h-16 w-full -translate-x-1/2 border-t border-black border-x-grey bg-white md:max-w-xl md:border-x">
      <div className="flex h-full w-full items-center justify-center gap-32">
        <Link to={PAGES_PATH.main.full}>
          <img src="/icons/home.svg" alt="home" width={34} height={34} />
        </Link>
        <Link to={"/"}>
          <img src="/icons/profile.svg" alt="profile" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};

export { Menu };
