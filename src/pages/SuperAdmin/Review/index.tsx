import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import { useEffect } from "react";
import ReviewCard from "./components/ReviewCard";

const ReviewPage = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();

  useEffect(() => {
    setTitle("kelola Data Ulasan");
    setButtonLabel("");
    setButtonLink("");
    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const DummyData = [
    {
      title: "KOPIKO",
      deletedReview: "Tempatnya Bau",
      reason: "Membuat Tempat Menjadi Sepi",
    },
    {
      title: "BENTO",
      deletedReview: "Tempat Kecil",
      reason: "Menjadi Sepi",
    },
    {
      title: "SPG",
      deletedReview: "Tempat Kecil",
      reason: "Menjadi Sepi",
    },
  ];

  return (
    <div className="flex flex-col gap-10 p-5">
      {DummyData.map((data, index) => (
        <ReviewCard
          key={index}
          title={data.title}
          deletedReview={data.deletedReview}
          reason={data.reason}
        />
      ))}
    </div>
  );
};

export default ReviewPage;
