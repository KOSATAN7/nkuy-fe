import { useHeaderContext } from "@/components/SideNav/components/HeaderContext";
import UlasanCard from "./components/UlasanCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "@/assets/Message.png";
import CustomButton from "@/components/Button/CustomButton";

const KelolaUlasan = () => {
  const { setTitle, setButtonLabel, setButtonLink } = useHeaderContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTitle("Kelola Ulasan");
    setButtonLabel("");
    setButtonLink("");

    return () => {
      setTitle("Dashboard");
      setButtonLabel("");
      setButtonLink("");
    };
  }, [setTitle, setButtonLabel, setButtonLink]);

  const DummyData = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore!",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore!",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore!",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore!",
    },
  ];

  const handleReportClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-5">
      <div className="space-y-5">
        {DummyData.map((data, index) => (
          <UlasanCard
            key={index}
            description={data.description}
            onReport={handleReportClick}
          />
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex bg-white rounded-lg overflow-hidden w-1/2 h-1/2 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              ></div>

              <div className="w-1/2 p-10 space-y-5 flex flex-col justify-center">
                <textarea
                  placeholder="Masukkan Pesan"
                  className="w-full h-52 border focus:outline-primary1 rounded-lg p-4 text-gray-700"
                />
                <div className="flex justify-between">
                  <CustomButton label="Batal" onClick={closeModal} />
                  <CustomButton label="Laporkan" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KelolaUlasan;
