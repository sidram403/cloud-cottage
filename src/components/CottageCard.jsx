import React from "react";
import { FaBed } from "react-icons/fa";
import { GiBathtub } from "react-icons/gi";
import { TbFriends } from "react-icons/tb";


const CottageCard = ({image, title, description, bathroom, bedroom, guest}) => {
  return (
    <div className="w-full md:w-[90%] cursor-pointer">
      <img src={image} alt="Cottage1" className="w-full h-[200px]" />
      <h1 className="py-2 mt-4 px-2 text-[24px]">{title}</h1>
      <div className="flex items-center gap-4 py-2 px-2 ">
        <div className="flex items-center gap-2">
            <FaBed fontSize={"24px"} />
            <p>{bathroom}</p>
        </div>
        <div className="flex items-center gap-2">
            <GiBathtub fontSize={"24px"} />
            <p>{bedroom}</p>
        </div>
        <div className="flex items-center gap-2">
            <TbFriends fontSize={"24px"} />
            <p>{guest}</p>
        </div>
      </div>
      <p className="text-justify py-2 text-[18px]">
        {description}
      </p>
    </div>
  );
};

export default CottageCard;
