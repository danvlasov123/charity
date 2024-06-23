import { useNavigate, useParams } from "react-router-dom";
import { Button, Input, constants as constantsUi } from "src/components/ui";
import { PAGES_PATH } from "src/router";

const mockData = {
  name: "Africa",
  img: "/mock-image.webp",
  images: ["/mock-image.webp", "/mock-image.webp", "/mock-image.webp"],
  id: 4,
};

const Donate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[30%] w-full overflow-hidden">
        <img
          src={mockData.img}
          alt={mockData.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 -mt-6 flex h-full flex-col justify-between gap-8 rounded-t-2xl bg-white px-6 pt-8">
        <div className="flex flex-col gap-4">
          <div className="bg-bg-grey rounded-2xl p-2.5">
            <p className="text-[25px] font-medium leading-7">
              Rihanna, David Guetta, Bebe Rexha, Alan Walker, Lady Gaga Cover
              Style
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-bg-grey rounded-3xl p-2.5">
              <p className="text-sm leading-3">2.3M views</p>
            </div>
            <div className="bg-bg-grey rounded-3xl p-2.5">
              <p className="text-sm leading-3">18 Feb 2024</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <button className="flex h-10 items-center rounded-lg border border-red active:bg-red active:text-white">
              <p className="w-full text-center text-base leading-3">10$</p>
            </button>
            <button className="flex h-10 items-center rounded-lg border border-red active:bg-red active:text-white">
              <p className="w-full text-center text-base leading-3">25$</p>
            </button>
            <button className="flex h-10 items-center rounded-lg border border-red active:bg-red active:text-white">
              <p className="w-full text-center text-base leading-3">50$</p>
            </button>
          </div>
          <div className="bg-bg-grey rounded-[20px] p-2.5">
            <p className="text-base leading-[18px]">
              Important Message, Darlings Please take a minute to listen
              Important Message, Darlings Please take a minute to
              listenImportant Message, Darlings Please take a minute to
              listenImportant Message, Darlings Please take a minute to
              listenImportant Message, Darlings Please take a minute to listen
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="bg-bg-grey rounded-2xl p-2.5">
            <p className="text-base leading-[18px]">
              Пожалуйста, введите желаемый размер твоего пожертвования. Наш
              минимальный взнос составляет 5.00$
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="sum" className="text-xs text-grey">
              Сумма взноса
            </label>
            <Input
              variant={constantsUi.variants.secondary}
              placeholder="0.00 $"
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <Button
              onClick={() => navigate(PAGES_PATH.confirm.full(mockData.id))}
            >
              Пожертвовать сейчас
            </Button>
            <Button
              variant={constantsUi.variants.secondary}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
