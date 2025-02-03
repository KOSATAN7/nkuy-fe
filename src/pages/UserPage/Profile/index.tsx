import MainLayout from "../LandingPage/Layout";

const UserProfile = () => {
  return (
    <MainLayout>
      <div className="mx-24 -my-12 relative items-center justify-center rounded-t-xl text-center border border-gray-200 bg-primary1">
        <div className="text-3xl font-semibold text-white m-12">
          <h1>Hi! Kenalin nama aku...</h1>
        </div>
        <div className="absolute bottom-0 left-0 transform translate-y-1/2 ml-12">
          <div className="flex items-center">
            <div className="w-32 h-32 ml-12 rounded-full bg-white  border-4 border-primary1 flex items-center justify-center">
              <h1 className="font-bold text-4xl">M</h1>
            </div>
            <div className="ml-2 mt-16 text-left">
              <h2 className="font-medium text-xl">
                Muhammad Irsyaad Fatahilah
              </h2>
              <p className="text-sm">Israfat@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-24 rounded-b-xl border border-gray-300 bg-white pt-24 pb-8">
        <div className="flex ml-16 pt-12">
          <div className="w-1/4">
            <h1 className="cursor-pointer bg-primary1 w-48 h-11 text-lg text-white rounded-lg text-left p-2 font-semibold">
              Profil
            </h1>
            <h1
              className="cursor-pointer w-48 h-11 text-lg rounded-lg text-left p-2 mt-4"
              onClick={() => {
                window.location.href = "/profile/password";
              }}
            >
              Password
            </h1>
          </div>

          <div className="border-l border-black h-auto -ml-12 p-2"></div>

          <div className="flex-1 mb-24 mt-4">
            <h2 className="font-medium text-xl text-gray-500">Tentang Saya</h2>

            <div className="mt-6">
              <h3 className="font-medium">Alamat</h3>
              <p className="text-sm"> Jl.Merdeka no.412</p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">No. Telepon</h3>
              <p className="text-sm">+62 897 2134 3482</p>
            </div>
            <div className="mt-6">
              <h3 className="font-medium">Kota</h3>
              <p className="text-sm">Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfile;
