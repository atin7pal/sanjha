import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Get In Touch",
    items: [
      "sanjhagharpunjab@gmail.com",
      "+91-7717331314 ",
      "+91-9354488544",
      "Neelon, to Ropar road, Near Kishti Village Dhande, Ludhiana, Punjab 141124",
    ],
  },
];
import logo from "../../assets/Images/home/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-[#e6e8dd] py-5">
      <div className="mx-auto px-8 ">
        <div className="flex justify-around items-center gap-4 w-full max-sm:flex-col max-sm:justify-center">
          <div className="w-[70%] max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
            <div
              className="h-[170px] w-[170px] bg-cover bg-no-repeat bg-center bg-[#fffdd7]/20  rounded-full"
              style={{ backgroundImage: `url(${logo})` }}
            ></div>
            <p className="w-[80%] py-6 max-sm:w-full max-sm:text-center">
              Sanjha Ghar Punjab invites you on a culinary journey with
              offerings for breakfast, lunch, and dinner. Immerse yourself in
              the rich flavors of Punjab throughout the day.
            </p>
            <Socialicons />
          </div>
          <div className="grid grid-cols-3 justify-around gap-3 items-start w-full max-sm:grid-cols-1 max-sm:justify-center max-sm:items-center">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-medium opacity-40 text-lg mb-3 max-sm:text-center"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-2 font-normal transition-colors hover:text-blue-gray-900 max-sm:text-center"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-3 text-center">
        ©️ Sanjha Ghar. all rights reserved
      </div>
    </footer>
  );
}

const Socialicons = () => {
  return (
    <div className="flex gap-4 text-blue-gray-900 sm:justify-start text-gray-700">
      <Link
        to="https://www.facebook.com/sanjhaGharpunjab"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.instagram.com/sanjha_ghar_punjab/"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaInstagram />
      </Link>
      <Link
        to="https://www.youtube.com/@SanjhaGharPunjab"
        className="bg-[#ebeddc] py-2 px-2 rounded-full shadow-lg shadow-gray-300"
      >
        <FaYoutube />
      </Link>
    </div>
  );
};
