import MainLayout from "../LandingPage/Layout";
import PanduanCard from "./components/PanduanCard";
import { BiShield, BiInfoCircle, BiShow, BiSupport } from "react-icons/bi";

const PanduanPage = () => {
    return (
        <MainLayout>
            <div className="px-10">

                <div className="flex flex-col justify-center items-center mt-20">
                    <h1 className="font-bold text-4xl">Ketentuan Berlaku</h1>
                    <h3 className="mt-10 text-center px-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi blanditiis tempora, labore temporibus laboriosam repellendus quaerat, a ad, earum non pariatur nulla accusantium iusto aperiam? Perferendis voluptates esse omnis commodi, iste laboriosam quo explicabo ea eveniet saepe nobis doloremque corporis ratione amet eaque ipsum praesentium cum dolor quia ipsam.</h3>
                    <div className="mt-28 mb-28 grid grid-cols-4 gap-8">
                        <PanduanCard
                            title="Privasi"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icon={<BiShield />}
                        />
                        <PanduanCard
                            title="Tayangan"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icon={<BiShow className="w-6 h-6 text-blue-500" />}
                        />
                        <PanduanCard
                            title="Informasi"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icon={<BiInfoCircle className="w-6 h-6 text-blue-500" />}
                        />
                        <PanduanCard
                            title="Layanan"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            icon={<BiSupport className="w-6 h-6 text-blue-500" />}
                        />

                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default PanduanPage;