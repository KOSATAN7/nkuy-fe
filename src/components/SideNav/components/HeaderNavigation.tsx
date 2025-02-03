import { FC } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  buttonLabel?: string;
  buttonLink?: string;
}

const HeaderNavigation: FC<HeaderProps> = ({
  title,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-xl">
      <h1 className="ml-5 text-2xl ">{title}</h1>
      {buttonLabel && buttonLink && (
        <Link
          to={buttonLink}
          className="bg-primary1 text-white px-4 py-2 border-2 transition-all duration-300 border-primary1 rounded-md hover:bg-white hover:text-primary1"
        >
          {buttonLabel}
        </Link>
      )}
    </div>
  );
};

export default HeaderNavigation;
