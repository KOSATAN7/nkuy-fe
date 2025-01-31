interface PeopleCardProps {
  image: string;
  nim: string;
  name: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, nim, name }) => {
  return (
    <div className="bg-white w-full rounded-xl flex flex-col items-center justify-center text-center shadow-xl">
      <div className="w-full h-40 flex items-center justify-center rounded-t-xl overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="m-3">
        <h1 className="text-sm">{nim}</h1>
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
};

export default PeopleCard;
