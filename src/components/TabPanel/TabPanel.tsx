import "./TabPanel.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  title: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, title, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      className="tabPanel"
    >
      {value === index && (
        <div>
          <h1 className="title">{title}</h1>
          {children}
        </div>
      )}
    </div>
  );
};

export default TabPanel;
