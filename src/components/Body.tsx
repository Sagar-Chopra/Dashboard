import { IoPrintOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FiPlusCircle } from "react-icons/fi";
import SalesTrends from "./SalesTrends";
import RevenueAnalytics from "./RevenueAnalytics";
import SalesAnalytics from "./SalesAnalytics";
import TopPerformers from "./Topperformers";

const Body = () => {
  return (
    <section className="w-full h-full pr-4 sm:pr-8 mb-8">
  {/* Navigation and Profile Actions */}
  <div className="w-full flex flex-wrap justify-between border-b pb-2 gap-4">
    <div className="flex flex-wrap sm:flex-nowrap">
      <p className="text-[#004abf] font-normal border-r border-gray-300 pr-4 flex items-center font-semibold">
        <span>Contact</span>
      </p>
      <p className="text-gray-900 font-normal border-r border-gray-300 px-4 flex items-center font-semibold">
        <span>Lead</span>
      </p>
      <p className="text-gray-900 font-normal border-r border-gray-300 px-4 flex items-center font-semibold">
        <span>Account</span>
      </p>
      <p className="text-gray-900 font-normal pl-4 flex items-center font-semibold">
        <span>More</span>
      </p>
    </div>
    <div id="profile" className="flex flex-wrap gap-4 sm:gap-6">
      <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer text-sm">
        <CiShare2 className="w-4 h-4" />
        <p className="hidden sm:block">Share</p>
      </button>
      <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer text-sm">
        <IoPrintOutline className="w-4 h-4" />
        <p className="hidden sm:block">Print</p>
      </button>
      <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 cursor-pointer bg-[#004abf] text-white text-sm">
        <FiPlusCircle className="w-4 h-4" />
        <p className="hidden sm:block">New</p>
      </button>
    </div>
  </div>

  {/* Statistics Section */}
  <section className="py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Number of Sales</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">2431</span>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Sales Revenue</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">$24.403</span>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Total Products</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">84234</span>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Total Customers</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">64732</span>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Average Price</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">$2431</span>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <span className="text-sm text-gray-400">Total Turnover</span>
      <span className="text-2xl sm:text-3xl text-gray-900 font-semibold">$5567</span>
    </div>
  </section>

  {/* Analytics Section */}
  <section className="mt-7 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-0 md:gap-6 gap-y-6">
    <RevenueAnalytics />
    <SalesAnalytics />
    <SalesTrends />
    <TopPerformers />
  </section>
</section>

  );
};

export default Body;
