import React from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import restauranthero from "../../assets/Images/Restaurant/restaurant.webp";
import droplet from "../../assets/Images/home/droplet.png";
import { Menucarduse } from "../../Components/Card/Menucarduse";
import { Avatar } from "@material-tailwind/react";
import { AvatarStack } from "../../Components/Avatar/Avatarstack";
import { Helmet } from "react-helmet-async";
import freshfood from "../../assets/Images/Restaurant/freshfood.webp";
import chef from "../../assets/Images/Restaurant/expertchef.webp";
import { BsMenuApp } from "react-icons/bs";
import { Trendingcard } from "../../Components/Card/Trending/Trendingcard";
import { Bannercomponent } from "../../Components/Banner/Bannercomponent";
import banner from '../../assets/Images/About/ceosectionbg.jpg'
import { Menutabs } from "../../Modules/Tabs/Tabs";
import { MenuData } from "../../assets/Arrays/Menudata";

export function Restaurant(props) {
  return (
    <>
      <Helmet>
        <title>Restaurant | Sanjha Ghar</title>
        <meta
          name="Restaurant"
          content="Sanjha ghar, authentic food, modern stays and meditation"
        />
      </Helmet>
      <NavigationBar />
      <section
        className={`mt-[110px] bg-center bg-no-repeat relative bg-cover h-[100vh] flex flex-col justify-center items-center w-full px-10 py-10 max-sm:h-full max-sm:p-6`}
      >
        <img
          src={droplet}
          className="absolute w-[200px] top-0 left-0 rotate-45 max-sm:hidden"
          alt=""
        />
        <div className="flex w-full h-full max-sm:flex-col">
          <div className="w-full flex flex-col justify-center items-start gap-4 px-10 max-sm:px-3">
            <h1 className="text-6xl font-bold w-[80%] text-gray-800">
              At <span className="themetext">Sanjha Ghar</span>, It's not just
              food, it's an <span className="themetext">experience</span>
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ad vero aperiam obcaecati ullam repellat perferendis natus quod
              magnam officia.
            </p>
            <button className="rounded-full w-[200px] px-8 py-3 border-[#009688] border-2 bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all max-[850px]:py-1.5 max-[850px]:w-full max-sm:px-4 max-[850px]:px-5">
              Explore
            </button>
            <div className="pt-4 flex w-full justify-start gap-3 font-semibold themetext items-center">
              <AvatarStack />
              140+ Reviews on google
            </div>
          </div>
          <div
            className="w-full bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${restauranthero})` }}
          ></div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full px-10 py-10 gap-4">
        <h2 className="text-5xl themetext font-bold py-10">Check our menu</h2>
        <div className="flex w-full gap-4 py-10 pb-10 max-sm:grid max-sm:grid-cols-2">
          <Menucarduse />
        </div>
      </section>
      <section className="w-full h-full flex flex-col justify-center items-center relative py-6 px-6">
        <div className="w-full h-full flex gap-0 max-sm:flex-col">
          <div className="w-full min-h-full flex gap-4 flex-col justify-center items-center">
            <h2 className="text-5xl font-bold themetext px-10 max-sm:px-2">
              No matter what, Sanjha Ghar makes sure it's fresh
            </h2>
            <p className="px-10 max-sm:px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, autem provident debitis sapiente architecto voluptatum
              nemo rerum! Sequi facere perferendis iure non veritatis, mollitia
              exercitationem quam minima tenetur, nam nobis.
            </p>
            <div className="w-full flex gap-4 px-10 font-bold text-lg max-sm:px-2">
              <div className="p-3 rounded-xl flex flex-col justify-center items-center border bg-teal-50 border-teal-100">
                <h2>Fresh and organic</h2>
                <p className="text-sm font-thin">Lorem ipsum dolor sit.</p>
              </div>
              <div className="p-3 rounded-xl flex flex-col justify-center items-center border">
                <h2>Quality food</h2>
                <p className="text-sm font-thin">Lorem ipsum dolor sit.</p>
              </div>
              <div className="p-3 rounded-xl flex flex-col justify-center items-center border">
                <h2>Delicious to the core</h2>
                <p className="text-sm font-thin">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div
            className="w-full h-[70vh] bg-cover bg-no-repeat bg-center flex flex-col border-l-2 border-[#009688] border-b-2 max-sm:border-none max-sm:h-[50vh]"
            style={{ backgroundImage: `url(${freshfood})` }}
          ></div>
        </div>

        <div className="w-full h-full flex gap-0 flex-row-reverse max-sm:flex-col">
          <div className="w-full min-h-full flex gap-4 flex-col justify-center items-start">
            <h2 className="text-5xl font-bold themetext px-10 max-sm:px-2">
              Our chefs are amazing
            </h2>
            <p className="px-10 max-sm:px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, autem provident debitis sapiente architecto voluptatum
              nemo rerum! Sequi facere perferendis iure non veritatis, mollitia
              exercitationem quam minima tenetur, nam nobis.
            </p>
          </div>
          <div
            className="w-full h-[70vh] bg-cover bg-no-repeat bg-center flex flex-col border-r-2 border-[#009688] border-t-2 max-sm:border-none max-sm:h-[50vh]"
            style={{ backgroundImage: `url(${freshfood})` }}
          ></div>
        </div>
      </section>
      <section className="px-10 py-20 bg-[#ebf7f3] w-full max-sm:p-6">
        <h1 className="text-4xl font-bold themetext text-start w-full mb-6">Our Menu</h1>
      <Menutabs data={MenuData} activestate={`breakfast`} />
      </section>
      <section className="px-10 py-20 bg-[#fff] flex flex-col justify-center items-center gap-4 max-sm:p-8">
        <h1 className="text-4xl font-bold w-full text-center text-gray-700 pb-10">
          Trending recepies
        </h1>
        <div className="flex gap-4 justify-center items-center w-[70%] max-sm:flex-col max-sm:w-full">
          <Trendingcard />
        </div>
      </section>
      <section className="px-10 pb-20 bg-[#fff] flex flex-col justify-center items-center gap-4 max-sm:p-8">
        <Bannercomponent banner={banner}/>
      </section>
      <Footer />
    </>
  );
}
