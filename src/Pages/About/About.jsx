import React from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Aboutcarousel from "../../Modules/Carousel/Aboutcarouse";
import bghero from "../../assets/Images/About/abouthero.webp";
import { StatsData } from "../../assets/Arrays/Stats/StatsData";
import ceosectionimg from "../../assets/Images/About/ceosectionbg.jpg";
import customer from "../../assets/Images/home/customer.webp";
import Carousel from "../../Modules/Carousel/Carousel";
import { Carduse } from "../../Components/Card/Carduse";
import { Aboutservicesarray } from "../../assets/Arrays/Services/Aboutservicesarray";
import { Aboutheroarray } from "../../assets/Arrays/Aboutheroarray";

export function About({}) {
  return (
    <>
      <NavigationBar />
      <section className="py-10 bg-white px-10 max-sm:px-4 flex justify-center items-center flex-col gap-4 w-full relative mt-[100px] h-[90vh] bg-cover bg-center bg-no-repeat max-sm:h-[70vh] max-md:h-full">
        <div className="w-full h-full flex justify-center items-center max-sm:flex-col-reverse">
          <div
            className="w-full h-full flex flex-col justify-center items-center px-10 gap-4 bg-cover bg-no-repeat bg-center max-sm:aspect-square"
            style={{ backgroundImage: `url(${bghero})` }}
          >
            <div className="w-[60%] flex flex-col justify-center items-start gap-4 max-sm:w-full max-sm:items-center">
              <h2 className="text-6xl font-bold themetext max-sm:text-center">
                About Us
              </h2>
              <h1 className="max-sm:text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
                atque corporis! Qui ad numquam quod nostrum provident voluptas
                corrupti voluptatum fugit reiciendis laboriosam rem quasi omnis.
              </h1>
              <button className="rounded-full ,min-w-[200px] px-8 py-3 border-[#009688] border-2 bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all">
                Explore Sanjha Ghar
              </button>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Aboutcarousel imgslides={Aboutheroarray} height={`50vh`} />
          </div>
        </div>
      </section>
      <section
        className="py-10 px-20 flex justify-center items-center flex-col gap-4 w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5"
        style={{ backgroundImage: `linear-gradient(#fff, #ebf7f3, #fff)` }}
      >
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-5xl font-bold themetext max-sm:text-center">
            Who We Are?
          </h2>
          <p className="w-[50%] max-sm:w-full max-sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            itaque autem iste, quos deserunt voluptatem iusto quaerat ratione
            quisquam ea.
          </p>
        </div>
        <div className="flex w-full h-500px justify-center items-center gap-4 max-sm:flex-col max-sm:h-full max-sm:mb-4">
          <div className="w-full h-full flex flex-col justify-center items-start gap-4">
            <img
              className="h-full w-full object-cover rounded-3xl mt-5"
              src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="w-full h-[500px] flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center max-sm:h-full">
            <StatsData />
          </div>
        </div>
      </section>
      <section className="py-10 px-20 flex justify-center items-center flex-col gap-4 w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5"></section>
      <section className="w-full h-full flex justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:px-6 max-sm:py-6">
        <div className="w-full h-full flex">
          <div className="w-full h-full">
            <Carousel />
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="w-full h-[80vh] bg-center brightness-105 bg-contain bg-no-repeat max-sm:hidden"
              style={{ backgroundImage: `url(${customer})` }}
            ></div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `linear-gradient(#000000cb, #000000cb),url(${ceosectionimg})`,
        }}
        className="py-10 h-[80vh] max-sm:h-[100%] bg-[#ebf7f3] px-20 max-sm:px-5 flex justify-center items-center flex-col gap-4 w-full relative bg-cover bg-center bg-no-repeat"
      >
        <div className="flex w-[80%] max-sm:flex-col max-sm:w-full">
          <div className="w-[70%] h-full max-sm:w-full flex justify-center items-center">
            <img src={bghero} className="h-[300px]" alt="" />
          </div>
          <div className="py-5 px-10 flex justify-center items-start w-full bg-black/30 backdrop-blur-sm flex-col gap-3 rounded-xl max-sm:px-5">
            <h2 className="text-3xl font-bold themetext">
              Meet Mr. Charanjeet Singh
            </h2>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              molestiae consequuntur autem laboriosam soluta adipisci iste non.
              Quo ad cum odit labore? Quam, reprehenderit tempora impedit esse,
              explicabo odit commodi voluptate quisquam molestias ratione illum
              tempore doloribus vitae qui provident laudantium iusto, facere
              dolor asperiores et. Accusamus accusantium fugit amet.
            </p>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `linear-gradient(#fff, #ebf7f3, #fff)` }} className="py-10 px-20 flex justify-center items-start gap-4 flex-col w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5">
        <h2 className="text-5xl font-bold themetext max-sm:text-center pt-5 w-full pb-1">
          Why Sanjha Ghar
        </h2>
        <p className="pb-8 w-[60%]  max-sm:w-full max-sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          amet optio cumque odio possimus neque harum esse at eos voluptas.
        </p>
        <div className="flex w-full justify-center items-center h-[60vh] max-sm:h-full max-sm:flex-col">
          <Carduse items={Aboutservicesarray} />
        </div>
      </section>
      <section className="py-10 px-20 flex justify-center items-start gap-4 flex-col w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5">
        <div className="w-full h-full">
          <h2 className="text-5xl font-bold text-center py-10 text-gray-800">
            Life At Sanjha Ghar
          </h2>
          <Aboutcarousel height={`70vh`} imgslides={Aboutheroarray} />
        </div>
      </section>
      <Footer />
    </>
  );
}
