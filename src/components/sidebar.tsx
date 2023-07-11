import React from "react";
import Image from "next/image";
import { Linkedin, Medium, Twitter, Envelope } from "../components/icons";

interface ComponentProps {
  data: {
    name: string;
    role: string;
    education: string[];
    contactLinks: string[];
  };
}
const sidebar = ({ data }: ComponentProps) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="flex flex-col bg-black h-auto sm:h-screen content-between sm:justify-around sm:w-1/3 sm:fixed">
      {/* Upper div */}
      <div className="flex flex-col items-center text-white pt-6 px-6">
        <Image
          src={"/profile-image.png"}
          alt="profile image"
          width={150}
          height={150}
          className="rounded-full h-full mb-4"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-2">{role}</h2>
        <div className="mb-2">
          {education.map((el: any) => (
            <p className="py-2">{el}</p>
          ))}
        </div>
      </div>
      {/* Lower div */}
      <div className="flex flex-col justify-center items-center mb-4">
        <h3 className="text-white mb-2">CONTACT ME</h3>
        <div className="flex gap-x-3">
          <a
            className="icons-contactme"
            href={contactLinks?.[0]}
            aria-label={"envelope link"}
          >
            <Envelope className="envelope-link text-white" />
          </a>
          <a
            className="icons-contactme"
            href={contactLinks?.[1]}
            aria-label={"twitter link"}
          >
            <Twitter className="twitter-link text-white" />
          </a>
          <a
            className="icons-contactme"
            href={contactLinks?.[2]}
            aria-label={"linkedin link"}
          >
            <Linkedin className="Linkedin-link text-white" />
          </a>
          <a
            className="icons-contactme"
            href={contactLinks?.[2]}
            aria-label={"Medium link"}
          >
            <Medium className="Medium-link text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
