import { useState } from "react";
import { NavigationBar } from "./Components/Header/Header";
import Services from "./assets/Arrays/Homefeaturearray";
import Carousel from "./Modules/Carousel/Carousel";
import hero from "./assets/Images/home/hero.webp";
import chef from "./assets/Images/home/chef.webp";
import { Menutabs } from "./Modules/Tabs/Tabs";
import customer from "./assets/Images/home/customer.webp";
import banner from "./assets/Images/home/banner.webp";
import droplet from "./assets/Images/home/droplet.png";
import { Footer } from "./Components/Footer/Footer";
import { MenuData } from "./assets/Arrays/Menudata";
import { GalleryData } from "./assets/Arrays/Gallery/Gallerydata";

function App() {
  return (
    <>
      <div className=" bg-contain bg-no-repeat bg-center mt-[100px] ">
        <NavigationBar />
        <section className="bg-[#e6e8dd] mx-10 my-10 h-[110vh] w-auto rounded-[40px] max-sm:mx-5 max-sm:my-3 max-sm:h-[100vh]">
          <div
            className="flex justify-center items-center flex-row h-full bg-contain bg-no-repeat bg-center rounded-[40px] max-sm:flex-col"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <div className="w-full h-full flex flex-col justify-center px-10 gap-5 max-sm:items-center max-sm:bg-white/60 max-sm:py-9 max-sm:text-center max-sm:backdrop-blur-sm">
              <h2 className="font-bold text-8xl fancyfont text-[#010404] max-sm:text-3xl">
                Welcome To <span className="text-[#009688]">Sanjha Ghar,</span>{" "}
                More than<span className="text-[#009688]"> home</span>
              </h2>
              <h1 className="text-gray-600 text-sm w-[80%] max-sm:w-full">
                Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers an
                authentic culinary experience with a diverse menu featuring
                traditional Punjabi dishes. Known for its warm ambiance and rich
                flavors, it's a go-to destination for those seeking the true
                taste of Punjabi cuisine in a welcoming setting.
              </h1>
              <p
                type="text"
                className="bg-white  w-[60%] rounded-full px-8 py-3 border-2 border-[#548776] max-sm:w-full"
              >
                Eat | Meditate | Stay and more
              </p>
              <div className="flex gap-5 w-[60%] max-sm:w-full">
                <button className="rounded-full w-full px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all">
                  Reserve a table
                </button>
                <button className="rounded-full w-full px-8 py-3 border-[#009688] border-2 bg-transparent text-[#009688] text-sm hover:bg-[#009688] hover:text-white transition-all">
                  Explore
                </button>
              </div>
            </div>
            <div className="w-full h-full flex flex-col max-sm:hidden"></div>
          </div>
        </section>
      </div>
      <div className="top-[100px]">
        <section className="mx-20 mt-10 h-[60vh] py-12 w-auto rounded-3xl max-sm:h-full max-sm:py-3 relative">
          <img
            src={droplet}
            alt=""
            className="absolute h-[200px] top-0 left-0 max-sm:h-[70px]"
          />
          <div className="w-full h-full flex justify-center items-center max-sm:flex-col">
            {Services.map((element) => (
              <div className="w-full py-4 px-20 flex flex-col gap-4 items-center justify-center max-sm:px-5">
                <h2 className="text-xl font-[500] text-[#548776] text-center">
                  {element.name}
                </h2>
                <p className="text-center text-gray-600 max-sm:w-full">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10 bg-[#ebf7f3] px-10 flex justify-center items-center flex-col gap-4 w-full">
          <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center text-center py-10">
            A glimpse to our gallery
          </h2>
          <Menutabs data={GalleryData} activestate={`restaurant`} />
          <div className="w-full h-full flex justi ytems-center px-14 py-10 bg-center bg-no-repeat max-sm:px-6">
            <div className="w-full h-full flex justiyy1center items-center max-sm:flex-col max-sm:gap-4">
              <div
                className="w-full h-[70vh] brightness-105 bg-contain bg-no-repeat max-sm:h-[40vh]"
                style={{ backgroundImage: `url(${chef})` }}
              ></div>
              <div className="w-full h-full  flex flex-col justify-center items-start gap-4 px-10 max-sm:px-3 max-sm:items-center">
                <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center">
                  Healthy food to live a healthier life for the future
                </h2>
                <p className="max-sm:text-center">
                  Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers
                  an authentic culinary experience with a diverse menu featuring
                  traditional Punjabi dishes. Known for its warm ambiance and
                  rich flavours, it's a go-to destination for those seeking the
                  true taste of Punjabi cuisine in a welcoming setting.
                </p>
                <button className="rounded-full px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all">
                  Reserve a table
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-full flex bg-[#ebf7f3] justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:py-8 max-sm:px-2">
          <div className="w-full flex justify-start item-center flex-col gap-6 max-sm:justify-center">
            <h2 className="text-4xl font-bold w-full text-gray-800 max-sm:text-center">
              Our Popular Menu
            </h2>
            <p className="w-1/2 text-gray-600 max-sm:w-full max-sm:text-center">
              Sanjha Ghar Punjab, a celebrated restaurant in Punjab, offers an
              authentic culinary experience with a diverse menu featuring
              traditional Punjabi dishes. Known for its warm ambiance and rich
              flavours, it's a go-to destination for those seeking the true
              taste of Punjabi cuisine in a welcoming setting.
            </p>
          </div>
          <div className="w-full">
            <Menutabs data={MenuData} activestate={`breakfast`} />
          </div>
          <button className="rounded-full mt-7 w-[200px] px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all">
            Explore all menus
          </button>
        </section>
        <section className="w-full h-full flex bg-white justify-center flex-col items-center px-20 py-16 bg-center bg-no-repeat max-sm:px-6 max-sm:py-6">
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
        <section className="w-full h-full flex justify-center items-center py-16 px-20 max-sm:px-6 max-sm:py-6">
          <div
            className="w-full h-[50vh] rounded-3xl shadow-xl shadow-gray-300 flex justify-center items-center flex-col gap-5 max-sm:h-[40vh]"
            style={{
              backgroundImage: `linear-gradient(#000000cb, #0000009a),url(${banner})`,
            }}
          >
            <h2 className="text-5xl text-white font-bold w-1/2 text-center max-sm:text-3xl max-sm:w-full">
              Join us now and flat get 20% off
            </h2>
            <div className="py-2 px-2 bg-white rounded-full w-1/4 flex gap-2 max-sm:w-1/2 max-sm:rounded-full max-sm:py-1 max-sm:px-1">
              <input
                type="text"
                className="border-none active:border-none focus:border-none rounded-full w-full"
                placeholder="email ..."
              />
              <button className="rounded-full w-full bg-[#009688] text-white border border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all">
                Sign up
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
