import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CodeIcon from "@mui/icons-material/Code";
import "./Home.scss";
import TabPanel from "../../components/TabPanel/TabPanel";
import Profile from "../Profile/Profile";

const Home = () => {
  const [tabIndex, setTabIndex] = useState(Number);
  const handleChange = (_: SyntheticEvent<Element, Event>, value: string) => {
    setTabIndex(Number(value));
  };
  return (
    <div className="home_wrapper">
      <div className="card_wrapper">
        <TabPanel value={0} index={tabIndex}>
          <Profile />
        </TabPanel>
        <TabPanel value={1} index={tabIndex}>
          bbbbbbbbbbbbbbbb
        </TabPanel>
        <TabPanel value={2} index={tabIndex}>
          ccccccccccccccccccccc
        </TabPanel>
      </div>
      <Tabs value={tabIndex} onChange={handleChange} orientation="vertical">
        <Tab icon={<AccountCircleIcon />} value={0} />
        <Tab icon={<CodeIcon />} value={1} />
        <Tab icon={<AccountCircleIcon />} value={2} />
      </Tabs>
    </div>
  );
};

export default Home;
