import MatchCard from "./components/MatchCard";
import MainLayout from "./Layout";
import Gambar1 from "@/assets/Kuda1.jpg";
const LandingPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center pt-40 pb-40">
        <p className="pb-4 text-4xl">Mau nonton apa hari ini?</p>
        <input
          type="text"
          className="w-1/2 py-3 rounded-full px-4 text-2xl"
          placeholder="Timnas Indonesia VS Argentina"
        />
      </div>
      <div className="p-14">
        <p className="font-semibold text-xl pb-5">Cari Tontonan yuk!</p>
        <div className="grid grid-cols-4 gap-10">
          <MatchCard
            image={Gambar1}
            day="TUE"
            date="9"
            title="Persib VS Persebaya"
            time="19.30 - 21.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Cari Tahu"
          />
          <MatchCard
            image={Gambar1}
            day="TUE"
            date="9"
            title="Persib VS Persebaya"
            time="19.30 - 21.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Cari Tahu"
          />
          <MatchCard
            image={Gambar1}
            day="TUE"
            date="9"
            title="Persib VS Persebaya"
            time="19.30 - 21.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Cari Tahu"
          />
          <MatchCard
            image={Gambar1}
            day="TUE"
            date="9"
            title="Persib VS Persebaya"
            time="19.30 - 21.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Cari Tahu"
          />
          <MatchCard
            image={Gambar1}
            day="TUE"
            date="9"
            title="Persib VS Persebaya"
            time="19.30 - 21.00"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Cari Tahu"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
