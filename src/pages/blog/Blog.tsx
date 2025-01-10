import { Article } from "../../components/article/Article";
import { articles } from "../../data/articles";
import styles from "./blog.module.css";

export const BlogPage = () => {
  return (
    <div className="container">
      <div className={styles.articles}>
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
};
