import { Box, Button } from "@chakra-ui/react";
import SkillList from "../SkillList/Index";
import { useState } from "react";
import PortfolioButtons from "./PortfolioButton";

const Portfolio = () => {
  const [currentTab, setCurrentTab] = useState<string>("fet");

  const getExperienceYears = (timeStamp: string) => {
    const difference = new Date(
      new Date().getTime() - new Date(timeStamp).getTime()
    );
    const epoch = new Date("1970-01-01 00:00:00-0600");
    return difference.getFullYear() - epoch.getFullYear();
  };

  const portfolio = [
    {
      label: "Front End Technologies",
      selector: "fet",
      activeCss: { background: "#229954", color: "#ffffff" },
    },
    {
      label: "Back End Technologies",
      selector: "bet",
      activeCss: { background: "#000000", color: "#f1c40f" },
    },
  ];

  const frontEndPortfolioData = [
    {
      stack: "React Js",
      rating: 4,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "react",
    },
    {
      stack: "Redux",
      rating: 4,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "redux",
    },
    {
      stack: "Typescript",
      rating: 3,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "typescript",
    },
    {
      stack: "Javascript",
      rating: 3,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "javascript",
    },
    {
      stack: "HTML",
      rating: 4,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "html",
    },
    {
      stack: "CSS",
      rating: 4,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "css",
    },
    {
      stack: "Next Js",
      rating: 3,
      outOf: 5,
      experience: getExperienceYears("05/01/2023"),
      image: "next-js",
    },
  ];

  const backEndPortfolioData = [
    {
      stack: "Node Js",
      rating: 3.5,
      outOf: 5,
      experience: getExperienceYears("06/01/2021"),
      image: "nodejs",
    },
    {
      stack: "Express Js",
      rating: 3,
      outOf: 5,
      experience: getExperienceYears("06/01/2021"),
      image: "express",
    },
    {
      stack: "Javascript",
      rating: 4,
      outOf: 5,
      experience: getExperienceYears("07/23/2018"),
      image: "javascript",
    },
    {
      stack: "AWS",
      rating: 2.5,
      outOf: 5,
      experience: getExperienceYears("06/01/2021"),
      image: "aws",
    },
    {
      stack: "Docker",
      rating: 2,
      outOf: 5,
      experience: getExperienceYears("05/01/2022"),
      image: "docker",
    },
  ];

  return (
    <Box background="rgba(0,200,0,0.4)" width="100%" padding={24}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-evenly",
          padding: "12px",
        }}
      >
        {portfolio.map((eachCategory) => (
          <PortfolioButtons
            key={eachCategory.selector}
            {...eachCategory}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </div>
      <div style={{ margin: "15px" }}>
        {currentTab === "fet" && (
          <SkillList skillList={frontEndPortfolioData} />
        )}
        {currentTab === "bet" && <SkillList skillList={backEndPortfolioData} />}
      </div>
    </Box>
  );
};

export default Portfolio;
