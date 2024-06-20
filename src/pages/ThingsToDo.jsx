import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalCard from "../components/HorizontalCard";

const cardsData = [
  {
    imageSrc: "./thingstodo/lighthouses.png",
    title: "Lighthouses",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/Rectangle15.png",
    title: "Beaches, Nature Parks, & Wildlife",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/reareation.png",
    title: "Recreation",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/historicsites.png",
    title: "Historic Sites & Museums",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
  {
    imageSrc: "./thingstodo/fooddining.png",
    title: "Food, Dining, & Festivals ",
    items: [
      {
        description: "Whitefish Point Lighthouse, 12.9 miles from cottage",
        link: "https://shipwreckmuseum.com/visit/whitefish-point-light/",
      },
      {
        description: "Crisp Point Lighthouse, 29 miles from Cloud Nine",
        link: "https://www.crisppointlighthouse.org/crisp2.html",
      },
      {
        description: "Point Iroquois Lighthouse, 35 miles from Cloud Nine",
        link: "https://www.fs.usda.gov/recarea/hiawatha/recarea/?recid=13342",
      },
    ],
  },
];

const ThingsToDo = () => {
  return (
    <div>
      <Header />
      <div
        className="w-full h-[630px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(./pagebackground.png)` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-white header-family text-center text-[45px] tracking-[10px] lg:text-[70px] font-normal uppercase">
            THINGS TO DO
          </h1>
        </div>
      </div>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="sm:text-3xl header-family text-2xl font-medium title-font mb-4 text-[#018E92] uppercase">
              Must See Attractions Near Cloud Nine Cottages
            </h2>
            <p className="text-gray-700 mt-1 mx-14">
              Discover the Upper Peninsula's unspoiled beauty, with its rugged
              landscapes, pristine lakes, and charming small towns offering
              endless opportunities for outdoor adventures and cultural
              experiences. Immerse yourself in the natural wonders of Paradise
              and explore the northeastern region of Michigan’s Upper Peninsula,
              where you can experience the breathtaking beauty of Tahquamenon
              Falls, stroll along the scenic shores of Lake Superior, and
              venture into the pristine wilderness of the Upper Peninsula.
            </p>
          </div>
          {cardsData.map((card, index) => (
            <HorizontalCard key={index} {...card} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ThingsToDo;
