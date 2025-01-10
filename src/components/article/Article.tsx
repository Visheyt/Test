import { FC } from "react";
import styles from "./article.module.css";
import { IArticle } from "../../data/articles";

export const Article: FC<IArticle> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
