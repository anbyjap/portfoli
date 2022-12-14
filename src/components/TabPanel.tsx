import { Box, Typography } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        width: "90%",
        height: "100%",
        backgroundColor: "blue",
        borderRadius: "30px",
      }}
    >
      {value === index && (
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            borderRadius: 5,
          }}
        >
          <Typography style={{ padding: 30 }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
