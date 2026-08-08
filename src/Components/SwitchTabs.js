import { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  return (
    <div className="relative flex w-[280px] rounded-full bg-neutral-900 p-1 sm:w-[320px]">
      {/* Sliding Background */}
      <div
        className={`absolute inset-y-1 rounded-full bg-gradient-to-r from-red-600 to-red-700 shadow-lg transition-all duration-300 ${
          selectedTab === 0
            ? "left-1 w-[calc(50%-4px)]"
            : "left-[calc(50%+2px)] w-[calc(50%-4px)]"
        }`}
      />

      {data.map((tab, index) => (
        <button
          key={index}
          onClick={() => activeTab(tab, index)}
          className={`relative z-10 h-9 flex-1 rounded-full text-sm font-semibold transition-all ${
            selectedTab === index
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SwitchTabs;
