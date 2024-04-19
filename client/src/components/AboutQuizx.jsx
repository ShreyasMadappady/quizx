import { useState } from "react";
import svg from "/src/svgs/arrow.svg";
import { useCollapse } from "react-collapsed";
function AboutQuizx({ heading, description, imgUrl }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="my-[2rem]">
      <div className="mx-[1.134rem] flex flex-col items-start gap-[1rem]">
        <h1 className="w-9/12 text-[1.5rem] font-black">{heading}</h1>
        <h2 className="w-9/12 text-[1rem]">{description}</h2>

        <div className="mb-[2.188rem] pb-[0.5rem] expandable pl-[1.134rem] text-[1rem]" {...getCollapseProps()}>
          <ol className="list-disc">
            <li>
              Interactive and Gamified Learning for engaging students with
              lively, memorable education tools.
            </li>
            <li>
              AI-Powered Teaching Support for streamlining lecture prep and
              enhance classroom interaction.
            </li>
            <li>
              Curated Educational Content for connecting learners with the
              latest field-specific breakthroughs.
            </li>
            <li>
              Collaborative Learning Environment for fostering idea exchange and
              peer networking for collective intelligence.
            </li>
            <li>
              Personalized Academic Tools for organizing and deliver targeted
              knowledge efficiently.
            </li>
          </ol>
        </div>

        <div className="mb-[2.188rem] showMore  flex gap-[0.25rem]  rounded-[0.5rem] bg-[#ECECEC] px-[1.5rem] py-[0.5rem]" {...getToggleProps()}>
          <button
            className="text-[0.75rem]"
            
          >
            View more
          </button>
          <img src={svg} alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AboutQuizx;
