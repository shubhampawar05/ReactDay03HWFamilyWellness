import React from "react";
import Carousal from "../Carousal/Carousal";
export default function Body() {
  return (
    <div>
      <section className="w-full ">
        <div className="w-full bg-[#F1F0EE]  pb-8">
          <div className="w-[940px] mx-auto  ">
            <Carousal />
          </div>
        </div>
      </section>

      <section>
        <div className="w-full bg-[#991F48] py-8">
          <div className="max-w-screen-lg mx-auto text-center">
            <h1 className="text-4xl  pt-8 pb-4 text-white">
              Think Health. Think Massage.
            </h1>
            <p className=" max-w-[940px] mx-auto text-white text-sm pt-4 pb-8">
              We are open 9am to 6pm; Monday through Sunday. If you would like
              to schedule an appointment <br /> with us, please call us at
              987-654-3210 today!
            </p>
            <div>
              <button className="border-2 border-white px-8 py-2 text-white font-semibold ">
                LEARN MORE ABOUT US
              </button>
              <button className="border-2 border-white px-8 py-2 ml-4 text-white font-semibold ">
                CONTACT US TODAY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[940px] mx-auto py-8">
        <div>
          <p className="text-[#991F48] text-lg">
            Are you looking for a professional, registered massage therapist?
            Sample Massage Therapy has 4 registered massage therapists who can
            provide clinical massage.
          </p>
          <p className="py-4 text-[16px]">
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <p className="text-[16px]">
            We welcome you to come explore all the benefits you’ll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>
          <div className="border-b border-black mt-8"></div>
        </div>
        <div className=" py-8 text-center">
          <p className="text-[#991F48] text-2xl pb-8">Family Wellness Massage Therapy</p>
          <p className="text-lg">
            888 Griffiths Way, Mainland ML 12345 <br />
            Tel: 987.654.3210 <br />
            Email: info@yoursite.com
          </p>
        </div>
      </section>
      <section className="w-full bg-[#A4A09C]">
        <div  className="text-center py-6">
        Copyright 2019 Website.com. All Rights Reserved.
        </div>
      </section>

    </div>
  );
}
