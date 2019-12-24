import React from "react";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import styled from "styled-components";
import image from "../images/home-group.jpg";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const Section = styled.section`
  background-color: rgb(31, 32, 35);
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  margin-top: -2.5rem;
  height: 70vh;
`;

export default () => {
  React.useEffect(() => {
    document.title = "Friday Night Church";
  }, []);
  return (
    <Layout>
      <Section>
        <Container maxWidth="md">
          <Box py={8}>
            <Card color="primary">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  1 Corinthians 14:26
                </Typography>
                <Typography variant="body1" gutterBottom>
                  "What is the outcome then, brethren? When you assemble, each one has a psalm, has a teaching, has a revelation, has a tongue, has an interpretation. Let all things be done for
                  edification."
                </Typography>
                <Typography variant="caption" gutterBottom>
                  New American Standard Bible
                </Typography>
              </CardContent>
            </Card>
            <Box mt={2}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    John 13:35
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    "By this all men will know that you are My disciples, if you have love for one another."
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    New American Standard Bible
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};
