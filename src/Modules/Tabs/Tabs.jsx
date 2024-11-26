import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Product } from "../../Components/Product/Product";
import { breakfastItems } from "../../assets/Arrays/Breakfastarray";
import { LunchItems } from "../../assets/Arrays/LunchItems";
import { DessertItems } from "../../assets/Arrays/Desertsarray";

export function Menutabs() {
  const [activeTab, setActiveTab] = useState("breakfast"); // State to manage active tab

  const data = [
    {
      label: "Breakfast",
      value: "breakfast",
      desc: <Product items={breakfastItems} />,
    },
    {
      label: "Lunch",
      value: "lunch",
      desc: <Product items={LunchItems} />,
    },
    {
      label: "Desserts",
      value: "desserts",
      desc: <Product items={DessertItems} />,
    },
    {
      label: "Beverage",
      value: "beverage",
      desc: <Product items={DessertItems} />, // Replace this with your actual Beverage items
    },
  ];

  return (
    <Tabs
      value={activeTab}
      onChange={(value) => setActiveTab(value)} // Handle active tab change
      className="w-full"
    >
      <TabsHeader
        className="bg-transparent w-1/2 mt-6"
        indicatorProps={{
          className: "bg-[#009688] shadow-none text-white rounded-full",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className={
              activeTab === value
                ? "font-normal text-gray-900"
                : "font-normal text-gray-900"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="flex justify-center items-center">
            <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-6 gap-8 ">{desc}</div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
