import styles from "./game.module.css";

export const Game = () => {
  return (
    <div className={styles.container}>
      <iframe
        src="https://esporte-br77.com/game-dir/index.html"
        className={styles.game}
        width={1280}
        height={62}
      />
    </div>
  );
};
