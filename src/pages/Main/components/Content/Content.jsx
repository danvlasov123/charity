import { Link } from "react-router-dom";

import { PAGES_PATH } from "src/router";

const mockData = [
  {
    name: "Africa",
    img: "/mock-image.webp",
    id: 1,
  },
  {
    name: "Africa",
    img: "/mock-image.webp",
    id: 2,
  },
  {
    name: "Africa",
    img: "/mock-image.webp",
    id: 3,
  },
  {
    name: "Africa",
    img: "/mock-image.webp",
    id: 4,
  },
];

const Content = () => {
  return (
    <div className="flex flex-col gap-5 overflow-y-auto py-4">
      {mockData.map((item) => (
        <Link
          key={item.id}
          className="relative h-60 overflow-hidden rounded-[20px]"
          to={PAGES_PATH.donate.full(item.id)}
        >
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-center text-[30px] font-bold uppercase leading-9 text-white">
              {item.name}
            </p>
          </div>
          <div className="absolute left-0 top-0 -z-10 h-full w-full blur-[1px] brightness-75">
            <img
              src={item.img}
              alt={item.name}
              height={240}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export { Content };
