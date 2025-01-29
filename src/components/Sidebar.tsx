import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiLayoutGridLine } from "react-icons/ri";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { PiNotebookLight } from "react-icons/pi";
import { useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth > 750);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 750);
    };

    handleResize(); // Set initial state based on screen width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (value: number) => {
    setCurrentPage((prevPage) => {
      if (prevPage === value) {
        return -1;
      }
      return value;
    });
  };

  return (
    <div
      className={`w-20 sm:min-w-12 bg-gray-100 transition-transform duration-300 ease-in-out transform sticky top-0 left-0 ${
        isOpen ? "w-[100%] sm:w-80 !absolute sm:!sticky" : ""
      } h-screen flex flex-col gap-6 z-9 h-screen`}
    >
      <div
        className={`min-h-16 ${
          isOpen ? "w-32" : ""
        } flex items-center mt-4 pl-5 sm:pl-9`}
      >
        <div
          className={`flex${
            isOpen ? " gap-4 " : " "
          }justify-between items-center`}
        >
          <AiOutlineMenu
            className="w-4 h-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <>
              <div className="text-3xl font-medium hidden lg:block">
                Star<span className="text-[#004abf]">Admin</span>
              </div>
              <div className="text-3xl font-medium block lg:hidden">
                S<span className="text-[#004abf]">A</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
      <div
        className={`min-w-20 ${
          currentPage == 0 && isOpen ? " h-auto " : " h-12 "
        } pl-5 sm:pl-9 ${
          currentPage == 0 ? "bg-white" : ""
        } rounded-e-2xl py-3 overflow-hidden`}
      >
        <div className="flex flex-row items-center gap-6">
          <RiLayoutGridLine
            className="w-6 h-6 text-[#004abf]"
            onClick={() => handleNavClick(0)}
          />
          {isOpen && (
            <span className="text-[#004abf] cursor-pointer" onClick={() => handleNavClick(0)}>
              Dashboard
            </span>
          )}
        </div>
        <ul className="text-gray-600 list-disc pl-8 font-light mt-2 flex flex-col gap-2">
          <li className="cursor-pointer">Defualt</li>
          <li className="cursor-pointer">CRM</li>
          <li className="cursor-pointer">Purple</li>
          <li className="cursor-pointer">Purple Dark</li>
          <li className="cursor-pointer">Sale</li>
          <li className="cursor-pointer">HR</li>
        </ul>
      </div>

      <div
        className={`pl-5 sm:pl-9 ${currentPage == 1 ? "rounded-e-2xl" : ""} ${
          currentPage == 1 && isOpen ? " h-auto " : " h-12 "
        } overflow-hidden` }
      >
        <div className="flex flex-row items-center gap-6 py-3">
          <BsFillJournalBookmarkFill
            className="w-6 h-6"
          />
          {isOpen && (
            <span className="text-gray-700 cursor-pointer" onClick={() => handleNavClick(1)}>
              Order
            </span>
          )}
        </div>
        <ul className="text-gray-600 list-disc pl-8 font-light mt-2 flex flex-col gap-2">
          <li className="cursor-pointer">Revenue Orders</li>
          <li className="cursor-pointer">Payments</li>
        </ul>
      </div>

      <div
        className={`pl-5 sm:pl-9 ${currentPage == 2 ? "rounded-e-2xl" : ""} ${
          currentPage == 2 && isOpen ? " h-auto " : " h-12 "
        } overflow-hidden`}
      >
        <div className="flex flex-row items-center gap-6 py-3">
          <PiNotebookLight
            className="w-6 h-6"
          />
          {isOpen && (
            <span className="text-gray-700 cursor-pointer" onClick={() => handleNavClick(2)}>
              CRM
            </span>
          )}
        </div>
        <ul className="text-gray-600 list-disc pl-8 font-light mt-2 flex flex-col gap-2">
          <li className="cursor-pointer">Users</li>
          <li className="cursor-pointer">Customer Profile</li>
          <li className="cursor-pointer">Resources</li> 
        </ul>
      </div>

      <div
        className={`pl-5 sm:pl-9 ${currentPage == 3 ? " rounded-e-2xl" : ""}`}
      >
        <div className="flex flex-row items-center gap-6 py-3">
          <PiNotebookLight
            className="w-6 h-6"
          />
          {isOpen && (
            <span className="text-gray-700 cursor-pointer">
              Development
            </span>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
