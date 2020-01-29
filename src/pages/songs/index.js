import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import Link from "../../components/Link";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MusicNote from "@material-ui/icons/MusicNote";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default ({ data }) => {
  React.useEffect(() => {
    document.title = "Worship Songs";
  }, []);

  return (
    <Layout>
      <Container maxWidth="md" disableGutters={true}>
        <List>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link style={{ textDecoration: "none" }} to={node.fields.slug}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar>
                      <MusicNote color="inherit" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={node.frontmatter.title} secondary={node.frontmatter.author} />
                </ListItem>
              </Link>
              <Divider />
            </div>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
