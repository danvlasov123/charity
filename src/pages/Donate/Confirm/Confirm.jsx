import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Button } from "src/components/ui";

import { fetchGetPostById } from "src/api/post/post";
import { Loader } from "src/modules/Loader/Loader";

import { PAGES_PATH } from "src/router";
import { fetchPostPayment } from "src/api/payments/payments";
import { useTranslation } from "react-i18next";

const Confirm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { id, amount } = useParams();

  const [post, setPost] = useState(null);

  const handleSubmit = async () => {
    const data = {
      amount: Number(amount),
      charityPostId: id,
      currency: "usd",
    };
    const response = await fetchPostPayment(data);

    if (response.success) {
      return window.open(response.invoiceUrl, "_self").focus();
    }
  };

  useEffect(() => {
    const initial = async () => {
      const data = await fetchGetPostById(id);

      if (data.success) {
        if (!data.prices) {
          const prices = [10, 25, 50];

          return setPost({ ...data, prices });
        }
        return setPost(data);
      }

      navigate(PAGES_PATH.main.full);
    };

    initial();
  }, [id]);

  if (!post) {
    return <Loader />;
  }

  return (
    <div className="flex h-full flex-col justify-between pt-5">
      <div className="px-6">
        <button onClick={() => navigate(-1)}>
          <img src="/icons/back.svg" alt="back" width={6} height={12} />
        </button>
        <div className="pt-5">
          <div className="rounded-2xl bg-bg-grey p-2.5">
            <p className="text-[25px] font-medium leading-7">{post.title}</p>
          </div>
        </div>
        <div className="pt-5">
          <button className="h-10 rounded-lg bg-red px-7">
            <p className="text-white">{amount}$</p>
          </button>
        </div>
      </div>
      <div className="border-t border-grey px-6">
        <div className="flex items-center justify-between py-6 text-xl font-medium leading-6">
          <p>{t("Total")}</p>
          <span>{amount}$</span>
        </div>
        <Button onClick={handleSubmit}>{t("Confirm")}</Button>
      </div>
    </div>
  );
};

export default Confirm;
