import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CottageCarasoul from "../components/CottageCarasoul";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import SubscribeSection from "../components/SubscribeSection";
import ContactSection from "../components/ContactSection";
const images = [
  {
    original: "./cottage1/cottage1-1.png",
    thumbnail: "./cottage1/cottage1-1.png",
  },
  {
    original: "./cottage1/cottage1-2.png",
    thumbnail: "./cottage1/cottage1-2.png",
  },
  {
    original: "./cottage1/cottage1-3.png",
    thumbnail: "./cottage1/cottage1-3.png",
  },
  {
    original: "./cottage1/cottage1-4.png",
    thumbnail: "./cottage1/cottage1-4.png",
  },
  {
    original: "./cottage1/cottage1-5.png",
    thumbnail: "./cottage1/cottage1-5.png",
  },
  {
    original: "./cottage1/cottage1-5.png",
    thumbnail: "./cottage1/cottage1-5.png",
  },
  {
    original: "./cottage1/cottage1-5.png",
    thumbnail: "./cottage1/cottage1-5.png",
  },
];

const Cottage1 = () => {
  const Amenities = [
    {
      icon: "./icons/icon1.png",
      name: "One Queen Bed",
    },
    {
      icon: "./icons/icon2.png",
      name: "Small living room area",
    },
    {
      icon: "./icons/icon3.png",
      name: "Dining Table",
    },
    { icon: "./icons/icon4.png", name: "Smart TV " },
    { icon: "./icons/icon5.png", name: "Wifi" },
    {
      icon: "./icons/icon6.png",
      name: "Stove/Oven ",
    },
    {
      icon: "./icons/icon7.png",
      name: "Refrigerator",
    },
    { icon: "./icons/icon8.png", name: "Microwave" },
    {
      icon: "./icons/icon9.png",
      name: "Coffee maker",
    },
    { icon: "./icons/icon10.png", name: "Toaster" },
    {
      icon: "./icons/icon11.png",
      name: "Pots & Pans",
    },
    {
      icon: "./icons/icon12.png",
      name: "Silver ware",
    },
    {
      icon: "./icons/icon13.png",
      name: "Salt & Pepper",
    },
    {
      icon: "./icons/icon14.png",
      name: "Outdoor grill",
    },
    { icon: "./icons/icon15.png", name: "Hot water" },
    { icon: "./icons/icon16.png", name: "Showers " },
    { icon: "./icons/icon17.png", name: "Towel" },
    { icon: "./icons/icon18.png", name: "Shampoo" },
    { icon: "./icons/icon19.png", name: "Soap" },
    {
      icon: "./icons/icon20.png",
      name: "Toilet paper",
    },
    {
      icon: "./icons/icon21.png",
      name: "Extra blanket/pillows ",
    },
    {
      icon: "./icons/icon22.png",
      name: "Ceiling fan",
    },
    { icon: "./icons/icon23.png", name: "Hangers" },
    {
      icon: "./icons/icon24.png",
      name: "Vacumn Cleaner",
    },
    {
      icon: "./icons/icon25.png",
      name: "Fire extinguisher",
    },
    {
      icon: "./icons/icon26.png",
      name: "Fire alarm",
    },
    { icon: "./icons/icon27.png", name: "CO2 alarm" },
    { icon: "./icons/icon28.png", name: "No pets" },
    { icon: "./icons/icon29.png", name: "No AC" },
    {
      icon: "./icons/icon30.png",
      name: "Smoke free",
    },
    {
      icon: "./icons/icon31.png",
      name: "No Hairdryer",
    },
  ];
  const [showMore, setShowMore] = useState(false);
  const [itemsToShowCount, setItemsToShowCount] = useState(10);

  useEffect(() => {
    const updateItemsToShowCount = () => {
      if (window.innerWidth >= 1024) {
        // Assuming 1024px as the breakpoint for PCs
        setItemsToShowCount(10);
      } else {
        setItemsToShowCount(9);
      }
    };

    updateItemsToShowCount(); // Set the initial value
    window.addEventListener("resize", updateItemsToShowCount);

    return () => {
      window.removeEventListener("resize", updateItemsToShowCount);
    };
  }, []);
  const itemsToShow = showMore
    ? Amenities
    : Amenities.slice(0, itemsToShowCount);
  return (
    <div>
      <Header />
      <div className="py-32 px-8 md:px-16 ">
        <CottageCarasoul
          images={images}
          head1="COTTAGE 1"
          bed="1"
          bath="1"
          member="2"
          para="This charming haven features rustic pine décor that’s perfect for
          relaxation and rejuvenation. Perfect for a honeymoon suite or romantic
          getaway!"
        />

        <div className="para-family mt-[56px]">
          <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            6720 M-123 Paradise, MI 49768
          </h2>
          <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
            New for 2024!
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight my-[56px]">
            This quiet and cozy log cabin is nestled in the woods. Wake up to a
            symphony of birdsongs in Paradise. This charming haven features
            rustic pine décor that’s perfect for relaxation and rejuvenation.
            Perfect for a honeymoon suite or romantic getaway! Cabin 1 features
            1 bedroom with a queen size bed and 1 full bathroom.
          </p>
        </div>
        <div className="para-family">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            Our Price :{" "}
          </h3>
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
            $110 per night (May 15th - Oct 21st)
          </h3>
          <p className="text-[16px] md:text-[20px] font-extralight">
            We accept payment via cash or check, credit/debit card (credit card
            payment is subjected to 3.6% processing fee)
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Please note: to secure your visit, a deposit of one night’s stay
            will be required upon booking. If you’re paying deposit by
            cash/check, please send to:{" "}
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            P.O. Box 62{" "}
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Paradise, MI 49768
          </p>
        </div>
        <div className="para-family">
          <p className="text-[16px] md:text-[20px] font-extralight my-[56px]">
            No pets allowed. No smoking.{" "}
          </p>
          <p className="text-[16px] md:text-[20px] font-extralight">
            Cloud Nine Cottages is located in Paradise, Michigan along Whitefish
            Bay. The property offers unmatched views of the stunning Lake
            Superior and is surrounded by some of the best attractions in the
            Upper Peninsula. Tahquamenon Falls State Park is 12.9 miles to the
            west and Whitefish Point Lighthouse is 12.9 to the north. Whether
            you seek serenity and tranquility on site at Cloud Nine for a long
            weekend or have a full itinerary planned to explore the area, there
            is simply so much to offer!{" "}
          </p>
        </div>
        <div className="para-family mt-[56px] ">
          <h3 className="text-[16px] md:text-[20px] font-semibold my-[25px]">
            Amenities
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:w-[1097px]">
            {itemsToShow.map((amenity, index) => (
              <span
                key={index}
                className="w-[102px] md:w-[205px] h-[85px] flex flex-col justify-center items-center text-[10px] md:text-[20px]"
              >
                <img src={amenity.icon} href={amenity.name} />
                {amenity.name}
              </span>
            ))}
          </div>
          <h6>
            <button
              className="btn flex ml-[5%] mt-[4%] justify-center items-center font-bold"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
              {showMore ? (
                <IoIosArrowDropup className="ml-4 " />
              ) : (
                <IoIosArrowDropdown className="ml-4" />
              )}
            </button>
          </h6>
        </div>
        <ContactSection />
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Cottage1;
