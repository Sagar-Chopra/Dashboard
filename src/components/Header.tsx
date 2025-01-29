import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const options = [
  { value: "category 1", label: "category 1" },
  { value: "category 2", label: "category 2" },
  { value: "category 3", label: "category 3" },
];

type Value = Date;

const Header = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleDatePickerClick = () => {
    setOpen(!open);
  }

  return (
    <header className="w-full flex items-center h-auto py-4 md:py-6 pr-9">
  <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">
    {/* Left Section: Greeting */}
    <div id="intro" className="flex flex-col gap-2">
      <p className="text-1xl sm:text-2xl md:text-3xl  text-gray-400 font-normal">
        Good Morning, <span className="text-gray-900 font-bold">John Doe</span>
      </p>
      <p className="text-gray-400 font-medium text-xs sm:text-sm md:text-base">
        Your performance summary this week
      </p>
    </div>

    {/* Right Section: Profile & Actions */}
    <div id="profile" className="flex flex-col flex-wrap md:flex-nowrap gap-4 md:gap-6 items-center mt-4 md:mt-0 lg:flex-row">
      {/* Select Dropdown */}
      <div className="w-full sm:w-auto order-3 lg:order-1">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="w-full sm:w-40 cursor-pointer"
        />
      </div>

      {/* Date Picker */}
      <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden order-2 lg:order-2">
        <div className="px-4 py-2 border-r border-gray-300">
          <CgCalendarDates className="w-5 h-5 cursor-pointer" onClick={handleDatePickerClick} />
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date || new Date())}
          dateFormat="dd/MM/yyyy"
          open={open}
          className="hidden"
        />
        {selectedDate && (
          <span className="text-gray-600 text-sm px-5">
            {selectedDate.toLocaleDateString()}
          </span>
        )}
      </div>

      {/* Icons for Search, Mail, Bell */}
      <div className="flex items-center order-1 lg:order-3">

      <div className="flex gap-3 md:gap-4">
        <IoIosSearch className="w-6 h-6 cursor-pointer text-gray-600" />
        <FiMail className="w-6 h-6 cursor-pointer text-gray-600" />
        <GoBell className="w-6 h-6 cursor-pointer text-gray-600" />
      </div>

      {/* Profile Image */}
      <div>
        <img src="/profile.png" className="w-9 h-9 rounded-full cursor-pointer ml-4" />
      </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;

// Good Morning, John Doe
// Your performance summary this week
