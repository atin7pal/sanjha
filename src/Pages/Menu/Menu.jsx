import React from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import menubg from "../../assets/Images/Restaurant/menubg.webp";

export function Menu({ menu }) {
  return (
    <>
      <NavigationBar />
      <div
        className="w-full h-full relative mt-[110px] py-10 px-10"
        style={{ backgroundImage: `url(${menubg})` }}
      >
        {menu.map((category, index) => (
          <div key={index} className="w-[90%] mx-auto bg-transparent">
            <h2 className="category-title text-lg outlinefont font-bold mt-4 mb-2">
              {category.category}
            </h2>
            <ul className="category-items list-disc pl-4">
              {category.items.map((item) => (
                <li
                  key={item.id}
                  className="menu-item flex justify-between border-b py-5 border shadow-md rounded-full my-2 px-5 bg-white"
                >
                  <span className="item-name font-medium">{item.name}</span>
                  <span className="item-price text-gray-600">
                    {item.price === "App." ? "Approx." : `₹${item.price}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
