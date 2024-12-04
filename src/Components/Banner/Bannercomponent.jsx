import React from "react";
import { Sendquery } from "../Sendquery/Sendquery";


export function Bannercomponent({banner}) {
  return (
    <>
      <div
        className="w-full h-[50vh] rounded-3xl shadow-xl shadow-gray-300 flex justify-center items-center flex-col gap-5 max-sm:h-[40vh] max-[850px]:h-[30vh]"
        style={{
          backgroundImage: `linear-gradient(#000000cb, #0000009a),url(${banner})`,
        }}
      >
        <h2 className="text-5xl text-white font-bold w-1/2 text-center max-sm:text-3xl max-sm:w-full">
          Join us now and flat get 20% off
        </h2>
        <Sendquery width="w-[30%]"/>
      </div>
    </>
  );
}
