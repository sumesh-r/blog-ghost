import { PostsOrPages } from "@tryghost/content-api";
import { GetStaticProps } from "next";
import { FunctionComponent } from "react";
import ghost from "../../../config/ghost";
import { PostOverview } from "../components";
import styles from "./postList.module.scss";

type Props = {
  posts: PostsOrPages;
};

const PostList: FunctionComponent<Props> = (props) => {
  const { posts } = props;

  return (
    <div className={styles["post-list"]}>
      {posts?.map((item) => (
        <PostOverview key={item.uuid} className={styles.post} item={item} />
      ))}
    </div>
  );
};



export default PostList;
