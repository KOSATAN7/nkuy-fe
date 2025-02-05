interface ContentCardProps {
  image: string;
  title: string;
  time: string;
  cabor: string;
  tim1?: string;
  tim2?: string;
  id: number; // Menambahkan id untuk penghapusan
  onDelete: (id: number) => void; // Callback untuk menghapus
}

const ContentCard: React.FC<ContentCardProps> = ({
  image,
  title,
  time,
  cabor,
  tim1,
  tim2,
  id,
  onDelete,
}) => {
  const defaultImage =
    "https://dummyimage.com/600x400/caced8/000000.png&text=Gambar+Tidak+Tersedia";
  const imageToShow = image || defaultImage;

  return (
    <div className="w-full">
      <div className="flex flex-col bg-neutral2 rounded-xl w-full h-full">
        <img
          src={imageToShow}
          className="rounded-t-xl w-full h-40 object-cover"
        />
        <div className="p-5 flex flex-col h-full justify-between">
          <div className="space-y-5">
            <div>
              <h1 className="text-lg font-medium">{title}</h1>
              <h2 className="mt-1">{time}</h2>
            </div>
            <h3>{cabor}</h3>
            <p>
              Saksikan Pertandingan {tim1} VS {tim2} Sekarang Juga!
            </p>
          </div>
          <div className="flex justify-end mt-10">
            <button
              className="bg-red rounded-full hover:bg-white border-2 border-red hover:text-red px-4 py-2 text-white transition-all duration-300"
              onClick={() => onDelete(id)} 
            >
              Hapus Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
