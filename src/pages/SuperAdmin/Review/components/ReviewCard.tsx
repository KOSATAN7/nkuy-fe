import { AiOutlineDelete } from "react-icons/ai";

interface ReviewCardProps {
  title: string;
  deletedReview: string;
  reason: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  deletedReview,
  reason,
}) => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center border-2 border- p-5 rounded-xl">
        <div>
          <h1 className="font-semibold text-xl mb-3">{title}</h1>
          <p className="mb-3">Ulasan Yang Dihapus : {deletedReview}</p>
          <p>Alasan : {reason}</p>
        </div>
        <div>
          <button className="flex items-center gap-3 p-3 bg-danger1 text-white rounded-xl">
            <AiOutlineDelete className="text-xl"/>
            Hapus Ulasan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
