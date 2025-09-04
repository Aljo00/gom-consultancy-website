import React from "react";
import { MdGroup } from "react-icons/md";

import athulImg from "../assets/Members/Athul.jpg";
import riyasImg from "../assets/Members/Riyas.jpg";
import harithaImg from "../assets/Members/Haritha.jpg";
import aljoImg from "../assets/Members/Aljo.jpg";
import antonyImg from "../assets/Members/Antony Jaison.jpg";
import albikImage from "../assets/Members/Albik shaju.jpg";
import godwinImg from "../assets/Members/Godwin Thomas.jpg";
import adornImg from "../assets/Members/Adorn K Joshy.jpg";
import faithImg from "../assets/Members/Faith Modiyil.jpg";

const teamMembers = [
  {
    name: "Athul",
    position: "Head of Visual Production",
    description:
      "Expert in video production, photography, and visual storytelling, ensuring every frame aligns with the brand’s message and impact.",
    image: athulImg,
  },
  {
    name: "Riyas Kurukkan",
    position: "Chief Operating Officer",
    description:
      "With a sharp focus on execution, strategy, and team coordination, the COO ensures every project runs smoothly on time, on budget, and beyond expectations.",
    image: riyasImg,
  },
  {
    name: "Haritha Jyothi",
    position: "Chief Marketing Officer",
    description:
      "Leads the marketing vision at GOM, blending strategy, creativity, and data to grow brands with impact and authenticity.",
    image: harithaImg,
  },
  {
    name: "Godwin Thomas",
    position: "Senior Video Editor",
    description:
      "The architect of our final cut. Godwin brings dynamic energy to post-production, editing our videos to be engaging, clean, and powerful. His skill in storytelling and visual polishing turns great ideas into unforgettable content.",
    image: godwinImg,
  },
  {
    name: "Aljo Joju",
    position: "Developer",
    description:
      "Drives the technological backbone of GOM, crafting scalable digital solutions with precision and passion. Blends creativity with code to deliver seamless, user-focused web experiences that reflect the brand’s innovation and excellence.",
    image: aljoImg,
  },
  {
    name: "Antony Jaison",
    position: "Thumbnail & Graphic Designer",
    description:
      "The creative mind behind GOM's visual identity. Antony designs compelling thumbnails and striking graphics that capture attention and communicate our brand's message. His artistic vision transforms ideas into impactful visuals that drive engagement and define our aesthetic.",
    image: antonyImg,
  },
  {
    name: "Albik Shaju",
    position: "Video Editor",
    description:
      "Brings our video content to life in post-production. Albik meticulously edits and refines our footage, ensuring a seamless flow and a professional finish. From color grading to sound design, he elevates our raw clips into engaging stories.",
    image: albikImage,
  },
  {
    name: "Faith Modiyil",
    position: "Script Writer",
    description:
      "The wordsmith who provides the blueprint for our content. Faith specializes in writing clear, creative, and impactful scripts that guide our production team and capture the attention of our viewers from the very first line.",
    image: faithImg,
  },
  {
    name: "Adorn K Joshy",
    position: "Operational Manager",
    description:
      "The driving force behind our operational excellence. Adorn translates strategic goals into seamless daily execution, managing workflows and optimizing processes. He ensures the entire team is aligned and equipped to deliver projects with efficiency and precision.",
    image: adornImg,
  },
];

const Team = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-white" id="team">
      {/* Capsule Heading */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold border border-purple-300">
          <MdGroup className="text-purple-600" />
          OUR TEAM
        </span>
      </div>

      {/* Hero Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        The{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Brilliant Minds
        </span>{" "}
        Driving{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Our Success
        </span>
      </h2>

      {/* Subheading */}
      <p className="text-lg text-center text-gray-700 font-medium max-w-2xl mx-auto mb-12">
        We're more than just a service provider; we're a team of passionate
        professionals who are committed to helping you unlock your brand's full
        potential.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 bg-white border border-purple-200 rounded-xl p-4 md:p-6 shadow-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full max-w-[320px] md:w-[240px] md:h-[240px] object-cover rounded-xl shadow-md mx-auto md:mx-0"
            />

            <div className="flex flex-col justify-center text-left">
              <h3 className="text-2xl font-bold text-purple-700">
                {member.name}
              </h3>
              <p className="text-pink-500 font-medium text-sm mb-2">
                {member.position}
              </p>
              <p className="text-gray-700 text-base leading-relaxed font-medium">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
