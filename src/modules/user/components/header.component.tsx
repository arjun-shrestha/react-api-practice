import { Body1, Card, CardFooter, CardHeader, CardPreview, Divider, FluentProvider, makeStyles, shorthands, teamsLightTheme } from '@fluentui/react-components';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavItems } from './nav-items.component';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
  },
});
const Header = () => {
  const styles = useStyles();
  return (
    <>
      <FluentProvider theme={teamsLightTheme}>
        <Card className={styles.card}>
          <CardHeader header={
            <Body1>
              <NavItems />
            </Body1>
          } />
          <Divider />
          <CardPreview style={{ padding: '2em' }}>
            <Outlet />
          </CardPreview>
          <CardFooter>
            <p className="read-the-docs">
              Copyright 2024
            </p>
          </CardFooter>
        </Card>
      </FluentProvider >
    </>

  )
};
export default Header;