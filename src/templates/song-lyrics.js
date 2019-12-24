import React from "react";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { graphql } from "gatsby";

export default ({ data }) => {
  const post = data.markdownRemark;

  React.useEffect(() => {
    document.title = post.frontmatter.title;
  }, [post.frontmatter.title]);

  return (
    <Layout showback={true}>
      <Container maxWidth="sm">
        <Box mt={10} mb={5}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
              <Typography variant="h4" component="h1">
                {post.frontmatter.title}
              </Typography>

              <Typography variant="body1">
                <span dangerouslySetInnerHTML={{ __html: post.html }} />
              </Typography>

              <Box mt={4}>
                <Typography variant="caption">Written by: {post.frontmatter.author}</Typography>
                <br />
                <Typography variant="caption">Copyright: {post.frontmatter.copyright}</Typography>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        copyright
      }
    }
  }
`;
