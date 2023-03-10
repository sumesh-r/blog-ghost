import { PostOrPage } from "@tryghost/content-api";
import { GetStaticPaths, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FunctionComponent } from "react";
import ghost from "../config/ghost";
import { Layout } from "../ui";

type Props = {
  post: PostOrPage;
};

type Params = {
  slug: string;
};

const PostPage: FunctionComponent<Props> = (props) => {
  const { post } = props;

  return (
    <Layout>
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await ghost.posts.browse({ limit: "all", fields: ["slug"] });

  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (props) => {
  const { locale = "", params } = props;
  const { slug = "" } = { ...params };

  const post = await ghost.posts.read({ slug });

  return {
    props: {
      post,
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default PostPage;
