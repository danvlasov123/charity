import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGetPosts } from "src/api/post/post";

import { PAGES_PATH } from "src/router";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const initial = async () => {
      const response = await fetchGetPosts();

      if (response.success) {
        setPosts(response?.result || []);
      }
    };

    initial();
  }, []);

  return (
    <div className="flex flex-col gap-5 overflow-y-auto py-4">
      {posts.map((item) => {
        const img = item.mediaFiles.find((img) => img?.thumbnailUrl);

        console.log(img);

        return (
          <Link
            key={item.id}
            className="relative h-60 overflow-hidden rounded-[20px]"
            to={PAGES_PATH.donate.full(item.id)}
          >
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-center text-[30px] font-bold uppercase leading-9 text-white">
                {item.title}
              </p>
            </div>
            <div className="absolute left-0 top-0 -z-10 h-full w-full blur-[1px] brightness-75">
              <img
                crossOrigin="anonymous"
                src={img.thumbnailUrl}
                alt={item.title}
                height={240}
                className="h-full w-full object-cover"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export { Content };
