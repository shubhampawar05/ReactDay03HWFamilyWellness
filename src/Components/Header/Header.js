import React from "react";

export default function Header() {
  return (
    <div>
      <section className="w-full bg-white pb-4">
        <div className="max-w-[940px] mx-auto pt-4">
          <h1 className="text-4xl text-[#991F48] pt-8 pb-2">Family Wellness</h1>

          <p className="tracking-widest">MASSAGE THERAPY</p>
          <div className="pt-8 flex w-full justify-normal text-center font-semibold  text-white align-middle">
            <div className="bg-[#991F48] w-[20%] py-2 hover:bg-[#c64c75]">HOME</div>
            <div className="w-[20%] bg-[#A4A09C] py-2 hover:bg-[#c64c75]">ABOUT</div>
            <div className="w-[20%] bg-[#A4A09C] py-2 hover:bg-[#c64c75]">SERVICES</div>
            <div className="w-[20%] bg-[#A4A09C] py-2 hover:bg-[#c64c75]">FAQ</div>
            <div className="w-[20%] bg-[#A4A09C] py-2 hover:bg-[#c64c75]">CONTACT</div>
          </div>
        </div>
      </section>
    </div>
  );
}
