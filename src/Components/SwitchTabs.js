import { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeTab = (tab, index) => {
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  return (
    <div className="relative inline-flex h-11 overflow-hidden rounded-full border border-white/10 bg-neutral-900/80 p-1 shadow-xl backdrop-blur-md">
      {/* Sliding Background */}
      <div
        className={`absolute inset-y-1 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 shadow-lg transition-all duration-300 ease-in-out ${
          selectedTab === 0
            ? "left-1 w-[calc(50%-4px)]"
            : "left-[calc(50%+2px)] w-[calc(50%-4px)]"
        }`}
      />

      {data.map((tab, index) => (
        <button
          key={index}
          onClick={() => activeTab(tab, index)}
          className={`relative z-10 flex h-9 w-24 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
            selectedTab === index
              ? "scale-105 text-white"
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
