import { useNavigate } from "react-router-dom";
import { Button } from "src/components/ui";

const Confirm = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col justify-between pt-5">
      <div className="px-6">
        <button onClick={() => navigate(-1)}>
          <img src="/icons/back.svg" alt="back" width={6} height={12} />
        </button>
        <div className="pt-5">
          <div className="bg-bg-grey rounded-2xl p-2.5">
            <p className="text-[25px] font-medium leading-7">
              Rihanna, David Guetta, Bebe Rexha, Alan Walker, Lady Gaga Cover
              Style{" "}
            </p>
          </div>
        </div>
        <div className="pt-5">
          <button className="h-10 rounded-lg bg-red px-7">
            <p className="text-white">45.21$</p>
          </button>
        </div>
      </div>
      <div className="border-t border-grey px-6">
        <div className="flex items-center justify-between py-6 text-xl font-medium leading-6">
          <p>Всего</p>
          <span>45$</span>
        </div>
        <Button>Подтвердить</Button>
      </div>
    </div>
  );
};

export default Confirm;
