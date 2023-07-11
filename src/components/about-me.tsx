import React from "react";
import Skills from "./skills";

const AboutMe = ({ data, skills }: any) => {
  const { title, body } = data;
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p>{body}</p>
      <Skills data={skills} />
    </div>
  );
};

export default AboutMe;
