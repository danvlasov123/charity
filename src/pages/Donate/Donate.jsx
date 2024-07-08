import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchGetPostById } from "src/api/post/post";
import { Button, Input, constants as constantsUi } from "src/components/ui";
import { Loader } from "src/modules/Loader/Loader";
import { PAGES_PATH } from "src/router";

import { format } from "date-fns";

import { useFormik } from "formik";
import { DonateAmountSchema } from "src/utils/validation-schemas";

import cn from "classnames";

const Donate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  const postDate = useMemo(() => {
    if (!post?.updatedAt) {
      return null;
    }
    return format(post.updatedAt, "dd MMM yyyy");
  }, [post?.updatedAt]);

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      amount: 10,
    },
    validationSchema: DonateAmountSchema,
    onSubmit: (values) => {
      navigate(PAGES_PATH.confirm.full(post.id, values.amount));
    },
  });

  useEffect(() => {
    const initial = async () => {
      const data = await fetchGetPostById(id);

      if (data.success) {
        if (!data.prices) {
          const prices = [10, 25, 50];

          return setPost({ ...data, prices });
        }

        const currentPrices = data.prices.split(",");

        return setPost({ ...data, prices: currentPrices });
      }

      navigate(PAGES_PATH.main.full);
    };

    initial();
  }, [id]);

  if (!post) {
    return <Loader />;
  }
  const img = post?.mediaFiles.find((media) => media.url);

  return (
    <div>
      <div className="h-[30%] w-full overflow-hidden">
        <img
          crossOrigin="anonymous"
          src={img.url}
          alt={post.title}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 -mt-6 flex h-full flex-col justify-between gap-8 rounded-t-2xl bg-white px-6 pt-8">
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-bg-grey p-2.5">
            <p className="text-[25px] font-medium leading-7">{post.title}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-3xl bg-bg-grey p-2.5">
              <p className="text-sm leading-3">{post.visitsCount} views</p>
            </div>
            <div className="rounded-3xl bg-bg-grey p-2.5">
              <p className="text-sm leading-3">{postDate}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {post.prices.map((value) => {
              const className = cn(
                "flex h-10 items-center rounded-lg border border-red active:bg-red active:text-white",
                {
                  "bg-red text-white": value === values.amount,
                },
              );
              return (
                <button
                  className={className}
                  key={value}
                  onClick={() => setFieldValue("amount", value)}
                >
                  <p className="w-full text-center text-base leading-3">
                    {value}$
                  </p>
                </button>
              );
            })}
          </div>
          <div className="rounded-[20px] bg-bg-grey p-2.5">
            <p className="text-base leading-[18px]">{post.content}</p>
          </div>
        </div>
        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <div className="rounded-2xl bg-bg-grey p-2.5">
            <p className="text-base leading-[18px]">
              Пожалуйста, введите желаемый размер твоего пожертвования. Наш
              минимальный взнос составляет 5.00$
            </p>
          </div>
          <div className="relative flex flex-col gap-2.5">
            <label htmlFor="sum" className="text-xs text-grey">
              Сумма взноса
            </label>
            <Input
              variant={constantsUi.variants.secondary}
              placeholder="0.00 $"
              onChange={handleChange}
              value={values.amount}
              onBlur={handleBlur}
              name="amount"
              type="number"
            />
            {touched.amount && errors.amount && (
              <span className="absolute -bottom-5 text-xs text-error">
                {errors.amount}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <Button type="submit">Пожертвовать сейчас</Button>
            <Button
              variant={constantsUi.variants.secondary}
              onClick={() => navigate(-1)}
            >
              Вернуться назад
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
