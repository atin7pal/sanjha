import React from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import meditationhero from "../../assets/Images/Meditation/meditationhero.png";
import yoga1 from "../../assets/Images/Meditation/yoga1.png";
import { AvatarStack } from "../../Components/Avatar/Avatarstack";
import droplet from "../../assets/Images/home/droplet.png";
import yogaimg from "../../assets/Images/Meditation/yoga.jpg";
import { BsPerson, BsPersonAdd } from "react-icons/bs";
import { FaPerson } from "react-icons/fa6";
import { IoGitNetwork } from "react-icons/io5";
import mandalabg from '../../assets/Images/Meditation/mandalabg.webp'
import yoga2 from '../../assets/Images/Meditation/yoga2.jpg'
import yoga3 from '../../assets/Images/Meditation/yoga3.jpg'

export function Meditation(props) {
  return (
    <>
      <NavigationBar />
      <section className="w-full h-screen mt-[100px] flex flex-col justify-center items-center bg-center bg-no-repeat bg-contain px-10 py-10">
        <div className="flex justify-center items-center w-full">
          <div className="w-full h-full flex justify-center items-start flex-col gap-4 relative">
            <img
              src={droplet}
              alt=""
              className="w-[150px] absolute top-[50px] rotate-45"
            />
            <div className="w-[200px] bg-gray-200 border rounded-full border-gray-400 py-1 px-3 text-center text-xs font-semibold text-gray-700 shadow-md">
              Welcome to Sanjha Ghar
            </div>
            <h1 className="text-6xl font-bold">
              Discover Your Inner Peace With{" "}
              <span className="themetext"> Sanjha Ghar</span>
            </h1>
            <button className="rounded-full w-[200px] px-8 py-3 bg-[#009688] text-white border-2 border-[#009688] text-sm hover:text-[#009688] hover:bg-transparent hover:border-2 hover:border-[#548776] transition-all max-[850px]:py-1.5 max-[850px]:w-full max-sm:px-4  max-[850px]:px-5">
              Explore
            </button>
            <div className="pt-4 flex w-full justify-start gap-3 font-semibold themetext items-center">
              <AvatarStack />
              140+ Reviews on google
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <img src={yoga1} alt="" />
          </div>
        </div>
      </section>
      <section className="p-10 flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between items-center p-8">
          <div className="flex flex-col gap-4 justify-center items-start">
            <div className="w-[200px] bg-gray-200 border rounded-full border-gray-400 py-1 px-3 text-center text-xs font-semibold text-gray-700 shadow-md">
              Sanjha Meditation
            </div>
            <h2 className="text-3xl font-semibold">
              Our passion for Meditation and Yoga
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              ratione culpa reprehenderit quisquam sit atque, eligendi
              exercitationem eveniet vitae laborum?
            </p>
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">3 +</h2>
              <p>Years of experience</p>
            </div>
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">5 +</h2>
              <p>Experienced trainers</p>
            </div>
            <div className="flex flex-col gap-2 border p-4 rounded-2xl">
              <h2 className="text-3xl font-semibold">100 +</h2>
              <p>Live classes done</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center h-[350px] rounded-3xl px-8 gap-4">
          <div
            style={{ backgroundImage: `url(${yogaimg})` }}
            className="w-full bg-center bg-cover bg-no-repeat h-full rounded-3xl"
          ></div>
          <div className="w-full h-full flex justify-center items-start gap-4 ">
            <div className="w-full h-full flex flex-col border-2 rounded-3xl bg-teal-100 justify-center items-start gap-3 p-5">
              <FaPerson className="text-4xl font-thin bg-teal-300 p-3 w-16 rounded-full h-16" />
              <h2 className="text-3xl font-thin">Certified Trainers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                molestias?
              </p>
            </div>

            <div className="w-full h-full flex flex-col border-2 rounded-3xl justify-center items-start gap-3 p-5">
              <IoGitNetwork className="text-4xl font-thin p-3 w-16 rounded-full h-16" />
              <h2 className="text-3xl font-thin">Hollistic Approach</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                molestias?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col p-10 h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${mandalabg})`}}>
       <div className="w-full flex justify-center items-center h-full gap-4">
        <div className="flex flex-col justify-center items-center w-full h-full rounded-3xl gap-4">
        <div className="flex w-full h-[100%] justify-center items-start bg-white rounded-3xl shadow-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${yoga2})`}}></div>
        <div className="flex w-full h-[70%] justify-center items-start rounded-3xl shadow-lg gap-4">
        <div className="flex bg-white h-full w-full rounded-3xl bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${yoga3})`}}></div>
        <div className="flex flex-col bg-white h-full w-full rounded-3xl justify-center items-center">
          <h2 className="text-8xl font-thin">1K+</h2>
          <p className="text-gray-600">Hours of yoga done</p>
        </div>
        </div>
        </div>
        <div className="w-full flex justify-center items-center rounded-3xl bg-[#009688]/70 h-full"></div>
       </div>
      </section>
      <Footer />
    </>
  );
}
