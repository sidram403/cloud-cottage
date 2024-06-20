import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CottageCarasoul from "../components/CottageCarasoul";
import { IoBedOutline } from "react-icons/io5";
import SubscribeSection from "../components/SubscribeSection";
import ContactSection from "../components/ContactSection";
const images = [
    {
        original: "./cottage3/cottage3-1.png",
        thumbnail: "./cottage3/cottage3-1.png",
    },
    {
        original: "./cottage3/cottage3-2.png",
        thumbnail: "./cottage3/cottage3-2.png",
    },
    {
        original: "./cottage3/cottage3-3.png",
        thumbnail: "./cottage3/cottage3-3.png",
    },
    {
        original: "./cottage3/cottage3-4.png",
        thumbnail: "./cottage3/cottage3-4.png",
    },
    {
        original: "./cottage3/cottage3-5.png",
        thumbnail: "./cottage3/cottage3-5.png",
    },
    {
        original: "./cottage3/cottage3-6.png",
        thumbnail: "./cottage3/cottage3-6.png",
    },
    {
        original: "./cottage3/cottage3-7.png",
        thumbnail: "./cottage3/cottage3-7.png",
    },
  ];

const Cottage3 = () => {
   
    const Amenities = [
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "One Queen Bed",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Small living room area",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Dining Table",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Smart TV " },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Wifi" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Stove/Oven ",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Refrigerator",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Microwave" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Coffee maker",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Toaster" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Pots & Pans",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Silver ware",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Salt & Pepper",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Outdoor grill",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Hot water" },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Showers " },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Towel" },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Shampoo" },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Soap" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Toilet paper",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Extra blanket/pillows ",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Ceiling fan",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "Hangers" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Vacumn Cleaner",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Fire extinguisher",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Fire alarm",
        },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "CO2 alarm" },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "No pets" },
        { icon: <IoBedOutline className="w-[50px] h-[50px]" />, name: "No AC" },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "Smoke free",
        },
        {
          icon: <IoBedOutline className="w-[50px] h-[50px]" />,
          name: "No Hairdryer",
        },
      ];
      return (
        <div>
          <Header />
          <div className="pt-32 mx-16 lg:mx-16 ">
            <CottageCarasoul images={images} head1="Cottage 3" bed="1" bath="1" member="2" para="This one-bedroom haven, just steps away from the sandy shorelines of stunning Whitefish Bay on Lake Superior, is ideal for a romantic getaway or a peaceful solo escape." />
    
            <div className="para-family mt-[56px]">
              <h2 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
                6720 M-123 Paradise, MI 49768
              </h2>
              <h3 className="text-[16px] md:text-[20px] font-semibold leading-8 my-[10px]">
                New for 2024!
              </h3>
              <p className="text-[16px] md:text-[20px] font-extralight my-[56px]">
              This one-bedroom haven, just steps away from the sandy shorelines of stunning Whitefish Bay on Lake Superior, features a beautiful stone fireplace for cozying up with a good book or to reinspire the artist/writer in you! Cabin 3 is ideal for a romantic getaway or a peaceful solo retreat. Cabin 3 has one bedroom with a queen size bed and stunning lake views. Listen to the peaceful sound of the waves roll in on the shoreline as you doze off – just feet from the stunning shoreline of the bay.
              </p>
              <p className="text-[16px] md:text-[20px] font-extralight my-[56px]">
              Cloud Nine Cottages is located in Paradise, Michigan along Whitefish Bay. The property offers unmatched views of the stunning Lake Superior and is surrounded by some of the best attractions in the Upper Peninsula. Tahquamenon Falls State Park is 12.9 miles to the west and Whitefish Point Lighthouse is 12.9 to the north. Whether you seek serenity and tranquility on site at Cloud Nine for a long weekend or have a full itinerary planned to explore the area, there is simply so much to offer! </p>
            </div>
            <div className="para-family">
              <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
                Our Price :{" "}
              </h3>
              <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
              $140 per night (May 15 - June 20)
              </h3>
              <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
              $160 per night (June 21 - October 7)
              </h3>
              <h3 className="text-[16px] md:text-[20px] font-semibold my-[10px]">
              $140 per night (October 8 - October  21)
              </h3>
              <p className="text-[16px] md:text-[20px] font-extralight">
              We accept payment via cash or check, credit/debit card (credit card payment is subjected to 3.6% processing fee)
              </p>
              <p className="text-[16px] md:text-[20px] font-extralight">
              Please note: to secure your visit, a deposit of one night’s stay will be required upon booking. If you’re paying deposit by cash/check, please send to:
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
            </div>
            <div className="para-family mt-[56px] ">
              <h3 className="text-[16px] md:text-[20px] font-semibold my-[25px]">
                Amenities
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:w-[1097px] md:h-[1030px]">
                {Amenities.map((amenity, index) => (
                  <span
                    key={index}
                    className="w-[102px] md:w-[205px] h-[85px] flex flex-col justify-center items-center text-[10px] md:text-[20px]"
                  >
                    {amenity.icon}
                    {amenity.name}
                  </span>
                ))}
              </div>
            </div>
            <ContactSection/>
          </div>
          <SubscribeSection />
          <Footer />
        </div>
      );
}

export default Cottage3