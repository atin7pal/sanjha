import React from "react";
import iconbg from "../../assets/Images/About/iconbg.png";

export function Card({ hidden, classname, title, description, icon: Icon }) {
  return (
    <>
      <div
        className={`w-full h-full flex flex-col justify-center items-center py-6 px-8 gap-4 ${classname}`}
      >
        <div
          className={`bg-contain w-[100px] h-[100px] bg-center bg-no-repeat ${hidden} flex justify-center items-center text-4xl`}
          style={{ backgroundImage: `url(${iconbg})` }}
        >
          <Icon />
        </div>
        <h2 className="text-2xl font-semibold text-center themetext">
          {title}
        </h2>
        <p className="text-center text-gray-800">{description}</p>
      </div>
    </>
  );
}
