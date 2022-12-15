import { Box } from "@material-ui/core";
import styles from "./TabPanel.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      className={styles.tabPanel}
    >
      {value === index && (
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            borderRadius: 5,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
