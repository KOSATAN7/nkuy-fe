import Logo from "@/assets/Logo.png"

const HeaderNav = () => {
  return (
    <div className="border-b-2">
        <div className="p-3 flex justify-between items-center">
            <img src={Logo} alt="" className="w-[200px]"/>
            <div className="flex gap-5 font-semibold">
                <p className="hover:text-primary1">Beranda</p>
                <p className="hover:text-primary1">Panduan</p>
                <p className="hover:text-primary1">Tentang</p>
                <p className="hover:text-primary1">Kontak</p>
            </div>
            <button className="bg-primary1 px-5 py-2 rounded-full text-white">Masuk</button>
        </div>
    </div>
  )
}

export default HeaderNav;