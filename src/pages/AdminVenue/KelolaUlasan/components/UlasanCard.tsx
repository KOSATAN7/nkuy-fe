import CustomButton from "@/components/Button/CustomButton";

interface UlasanCardProps {
  description: string;
  onReport: () => void;
}

const UlasanCard: React.FC<UlasanCardProps> = ({ description, onReport }) => {
  return (
    <div className="flex px-10 py-3 rounded-lg justify-between items-center bg-neutral2">
      <h1>Ulasan</h1>
      <p>{description}</p>
      <CustomButton label="Laporkan Ke Superadmin" onClick={onReport} />
    </div>
  );
};

export default UlasanCard;
