import { PostsOrPages } from "@tryghost/content-api";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FunctionComponent } from "react";
import ghost from "../config/ghost";
import { PostList } from "../modules/posts/containers";
import { Layout } from "../ui";
import styles from "./index.module.scss";

type Props = {
  posts: PostsOrPages;
};

const Index: FunctionComponent<Props> = (props) => {
  const { posts } = props;

  return (
    <Layout>
      <div className={styles.index}>
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const { locale = "" } = props;

  const results = await ghost.posts.browse({ limit: "all" });

  return {
    props: {
      posts: results,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default Index;
