import { PostOrPage } from "@tryghost/content-api";
import classnames from "classnames";
import Link from "next/link";
import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from "react";
import styles from "./postOverview.module.scss";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  item: PostOrPage;
};

const PostOverview: FunctionComponent<Props> = (props) => {
  const { item, className, ...divProps } = props;

  return (
    <Link href={`/${encodeURIComponent(item.slug)}`} passHref>
      <div
        {...divProps}
        className={classnames(styles["post-overview"], className)}
      >
        <div className={styles["image-container"]}>
          {item?.feature_image && (
            <img
              className={styles["image-container__image"]}
              src={item?.feature_image}
              alt={item?.feature_image_alt ?? ""}
            />
          )}
        </div>

        <div className={styles["content-container"]}>
          <h2>{item?.title}</h2>
          <p>{item?.excerpt?.split(" ")?.splice(0, 30)?.join(" ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostOverview;
