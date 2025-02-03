import MainLayout from "../../LandingPage/Layout";

const PasswordPage = () => {
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
            <h1
              className="cursor-pointer w-48 h-11 text-lg rounded-lg text-left p-2 "
              onClick={() => {
                window.location.href = "/profile";
              }}
            >
              Profil
            </h1>
            <h1 className="cursor-pointer bg-primary1 text-white font-semibold w-48 h-11 text-lg rounded-lg text-left p-2 mt-4">
              Password
            </h1>
          </div>

          <div className="border-l border-black h-auto -ml-12 p-2"></div>

          <div className="flex-1 mt-4">
            <h2 className="font-medium text-xl text-gray-500">Password Saya</h2>

            <div className="mt-6">
              <h3 className="font-medium">Password Anda</h3>
              <p className="text-gray-500 text-sm"> isrotmele***</p>
            </div>

            <div className="mt-6">
              <h3 className="font-medium">Ganti Password</h3>
              <input
                type="password"
                required
                placeholder="Masukkan Password anda!"
                className="border border-gray-300 rounded-lg p-2 text-gray-500 w-72 text-sm"
              />
            </div>
            <div className="mt-6">
              <h3 className="font-medium">Masukkan Ulang Password</h3>
              <input
                type="password"
                required
                placeholder="Masukkan Ulang Password Anda"
                className="border border-gray-300 rounded-lg p-2 text-gray-500 w-72 text-sm"
              />
            </div>
            <div className="mt-12 border border-gray-300 p-2 w-40 text-center rounded-lg bg-primary1 text-white font-semibold">
              <button className="">Ubah Password</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PasswordPage;
