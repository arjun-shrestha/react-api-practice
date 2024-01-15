import * as React from "react";
import {
  Divider,
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    ...shorthands.padding("0px", "0px"),
    rowGap: "20px",
  },
});

export const NavItems = (props: Partial<TabListProps>) => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <TabList>
        <Tab value="tab1" onClick={() => navigate('/')}>Home</Tab>
        <Tab value="tab2" onClick={() => navigate('/users')}>Fetch User</Tab>
        <Tab value="tab3" onClick={() => navigate('/pagination')}>Pagination</Tab>

        {/* <Tab value="tab3">Third Tab</Tab>
        <Tab value="tab4">Fourth Tab</Tab> */}
      </TabList>
    </div>
  );
};