import MainLayout from "../LandingPage/Layout";
import Logo from "@/assets/logo K.png";

const teamMembers = [
  { name: "M. Irsyaad Fatahillah", id: "10122074", image: "/src/assets/image 31.png" },
  { name: "M. Rifqi Hamzah", id: "10122064", image: "/src/assets/image 34.png" },
  { name: "M. Iqbal Januar", id: "10122073", image: "/src/assets/image 33.png" },
  { name: "Fahri Arsyah", id: "10122048", image: "/src/assets/image 32.png" },
  { name: "Naufal Ramdhan R", id: "10122069", image: "/src/assets/image 35.png" },
  { name: "Rangga Krisna", id: "10122067", image: "/src/assets/image 36.png" },
];


const TentangPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <p className="pb-4 text-3xl font-bold">Tentang Kami</p>
        <div className="w-1/2 z-50 flex items-center gap-40 mt-10 rounded-3xl bg-white max-w-9/12">
          <img src={Logo} alt="Logo" />
          <div>
            <p className="pb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pt-20 pb-20">
        <p className="pb-4 text-3xl font-bold">Tim Perancang</p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full z-50 flex flex-col rounded-3xl bg-white"
            >
              <img src={member.image} alt="Team Member" />
              <div className="pl-5 items-start mt-2 pb-3 pt-3">
                <p className="font-bold">{member.name}</p>
                <p>{member.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default TentangPage;
