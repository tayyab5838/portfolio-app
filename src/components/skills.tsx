"use client";
import React, { useState } from "react";

const Skills = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active: any) => {
    return activeTab === active ? "bg-yellow" : "bg-grey";
  };

  const setTabAlignment = (tab: any) => {
    return tab === "soft" ? "text-left" : "text-right";
  };

  const tabs = (
    <div className="mt-4">
      {["soft", "hard"].map((el: any) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );
  return (
    <div>
      {tabs}
      <ul
        className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
          activeTab === "soft" ? "justify-start" : "justify-end"
        }`}
      >
        {data[activeTab].map(({ icon, text }: any) => (
          <li key={text} className="skills">
            <span>{icon}</span>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
