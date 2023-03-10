import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FunctionComponent } from "react";
import ghost from "../../config/ghost";
import { Layout } from "../../ui";

type Props = {
  post: any;
};

const PostPage: FunctionComponent<Props> = (props) => {
  const { post } = props;

  return <Layout>Test</Layout>;
};

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const { locale = "" } = props;

  const results = await ghost.posts.browse({ limit: "all" });

  return {
    props: {
      post: results,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default PostPage;
