import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import prisma from "../../lib/prisma.js";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

export async function getServerSideProps() {
  const userMessagesQuery = await prisma.userMessage.findMany();
  return {
    props: { userMessages: userMessagesQuery },
  };
}

const getMessages = async () => {
  try {
    const userPosts = await axios.get(
      "http://localhost:3000/api/devices/getmessagedata"
    );
    return userPosts;
    console.log(userPosts.data);
  } catch (err) {
    console.error(err.message);
  }
};

export function TableList({ userMessages }) {
  const [userMessagesQuery, setUserMessagesQuery] = useState(userMessages);
  let userMessagesResult = [];
  useEffect(() => {
    const interval = setInterval(async () => {
      const fetchResult = await getMessages();
      console.log("refresh", fetchResult);
      setUserMessagesQuery(fetchResult["data"]);
    }, 1000);
    return () => clearInterval(interval);
  });

  userMessagesQuery.map((c, i) => {
    userMessagesResult.push([c.id, c.username, c.message]);
  });

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Message Dashboard</h4>
            <p className={classes.cardCategoryWhite}>
              Here you can see your messages of your mates!
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Username", "Message"]}
              tableData={userMessagesResult}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TableList.layout = Admin;

export default TableList;
