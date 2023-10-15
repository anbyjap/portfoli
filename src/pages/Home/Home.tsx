import React from "react";
import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import HomeIcon from "@mui/icons-material/Home";
import "./Home.scss";
import TabPanel from "../../components/TabPanel/TabPanel";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import About from "../About/About";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
// import colors from "../../_colors.scss";

const Home = () => {
  const matches = useMediaQuery("(min-width:768px)");
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (_: SyntheticEvent<Element, Event>, value: string) => {
    setTabIndex(Number(value));
  };

  const CustomTab = styled(Tab)(({ theme }) => ({
    // color: colors.second,
    color: "#445069", // <- Change the color here
    width: "80%",
    height: "80%",
    "&.Mui-selected": {
      color: "#f7e987",
    },
  }));

  return (
    <div className="home_wrapper">
      <Tabs
        className="tab_wrapper"
        value={tabIndex}
        onChange={handleChange}
        variant="fullWidth"
        orientation={matches ? "vertical" : "horizontal"}
        centered
        // style={matches ? { bottom: 0 } : {}}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#f7e987",
          },
        }}
      >
        <CustomTab icon={<HomeIcon />} value={0} />
        <CustomTab icon={<CodeIcon />} value={1} />
        <CustomTab icon={<AccountCircleIcon />} value={2} />
      </Tabs>
      <div className="card_wrapper">
        <TabPanel title="Profile" value={0} index={tabIndex}>
          <Profile />
        </TabPanel>
        <TabPanel title="Projects" value={1} index={tabIndex}>
          <Projects />
        </TabPanel>
        <TabPanel title="About" value={2} index={tabIndex}>
          <About />
        </TabPanel>
      </div>
    </div>
  );
};

export default Home;
