import { useUser } from "src/hooks";

const Head = () => {
  const {
    state: { user },
  } = useUser();
  return (
    <div className="flex items-end justify-between pt-4">
      <h1 className="text-xl font-medium leading-6">{user?.name}</h1>
      <img src="/logo.svg" alt="logo" height={54} />
    </div>
  );
};

export { Head };
