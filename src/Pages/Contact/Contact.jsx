import React from "react";
import { NavigationBar } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import abouthero from "../../assets/Images/About/abouthero.webp";
import { Carduse } from "../../Components/Card/Carduse";
import { ContactOptionsArray } from "../../assets/Arrays/Contact/Contactsystemarray";
import dottedmap from "../../assets/Images/Contact/dottedmap.webp";
import ContactForm from "./ContactForm";

export function Contact(props) {
  return (
    <>
      <NavigationBar backgroundcolor="bg-[#ebf7f3]" />
      <section className="py-10 px-20 flex justify-center bg-[#ebf7f3] items-start gap-4 flex-col w-full relative bg-cover bg-center bg-no-repeat max-sm:flex-col max-sm:px-5 mt-[100px] max-sm:h-full">
        <div className="flex w-full h-full justify-center gap-3 items-center max-sm:flex-col">
          <div className="w-full h-[70vh] flex flex-col justify-stretch px-8 gap-6 py-8 rounded-3xl items-start bg-center bg-no-repeat bg-contain max-sm:h-full">
            <div className="w-full h-full flex flex-col gap-3 max-sm:text-center max-sm:justify-center">
              <h2 className="text-5xl font-bold themetext max-sm:text-center pt-5 w-full pb-1">
                Contact Us
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis quae itaque fugiat cupiditate praesentium suscipit
                totam numquam id facilis maiores.
              </p>
              <p>sanjhagharpunjab@gmail.com</p>
              <p className=" text-gray-700">+91-7717331314</p>
              <p className="underline font-semibold">Contact Support</p>
            </div>
            <div className="flex justify-center items-center gap-2 max-sm:hidden">
              <Carduse items={ContactOptionsArray} />
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="w-full h-full flex justify-center items-center py-16 px-16 max-sm:px-6 max-sm:py-6">
        <div className="flex w-full justify-start items-center gap-6 max-sm:flex-col max-sm:gap-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.83154578702!2d76.13873947558545!3d30.86339097452155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa7889e99650f%3A0xba69affc5f4e9d90!2sSanjha%20Ghar%20Punjab!5e0!3m2!1sen!2sin!4v1733070625779!5m2!1sen!2sin&style=satellite"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-3xl w-full h-[500px]"
          ></iframe>
          <div className="w-full h-[500px] flex flex-col justify-center items-center gap-4 bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(${abouthero})`}}>
            <h2 className="font-semibold text-gray-600 text-2xl text-center">Our Location</h2>
            <h2 className="text-5xl themetext font-semibold text-center">Contact Us</h2>
            <h2 className="text-2xl font-semibold text-gray-600 text-center">Sanjha Ghar</h2>
            <p className="w-1/4 font-semibold text-gray-500 text-center">Neelon To, Ropar Road, near Kishti, Dhande, Samrala, Punjab 141114</p>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-start gap-4 flex-col w-full relative">
        <img src={dottedmap} alt="" />
      </section>
      <section className="w-full h-full flex justify-center items-center py-16 px-16 max-sm:px-6 max-sm:py-6">
        <div className="w-full h-full flex max-sm:flex-col"></div>
        </section>
      <Footer />
    </>
  );
}
