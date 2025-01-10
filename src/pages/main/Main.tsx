import { useNavigate } from "react-router-dom";
import styles from "./main.module.css";
import { verifyService } from "../../services/verify-service";

const GAME_DESCRIPTION =
  "This game is an absolute masterpiece that will captivate your mind andimmerse you in a world full of excitement, mystery, and challenge.Designed for those who crave thrilling gameplay and engagingstorylines, it offers an experience like no other. From the very firstmoment you enter the game, you’ll be drawn into a captivatingnarrative that will keep you hooked for hours. The world is rich indetail, offering breathtaking environments, diverse characters, andintricate plots that unfold as you progress. Every corner you exploreis filled with secrets to uncover, challenges to face, and rewards toearn. Whether you're an experienced gamer or just starting yourjourney, this game adapts to your skill level, offering a perfectbalance between difficulty and accessibility. But it’s not just thestoryline that will keep you coming back—it's the exceptionalmechanics, innovative gameplay, and stunning graphics that make thisgame truly exceptional. The combat system is fluid and dynamic,offering a variety of strategies and approaches, while the explorationmechanics are incredibly detailed, allowing for a sense of freedom anddiscovery. Each mission, quest, and encounter is carefully crafted,ensuring that every moment spent in the game feels meaningful andrewarding. The game also excels in its emotional depth. Withcharacters you’ll come to care about, the game will take you on anemotional rollercoaster, challenging your beliefs, testing yourchoices, and leaving you with unforgettable memories. It’s not just agame; it’s an experience that will resonate long after you've put downthe controller. Whether you enjoy solving complex puzzles, battlingformidable foes, or simply immersing yourself in a beautifully craftedworld, this game has something for everyone. It’s more than justentertainment—it's a journey that will stay with you, challenge you,and inspire you. Don’t miss out on this incredible experience. Thisgame is truly a gem that will be remembered for years to come.";

const START_GAME_DESCRIPTION =
  "If you are ready to go on an unforgettable journey, let's start our cool game";

export const MainPage = () => {
  const navigate = useNavigate();
  const isVerify = verifyService.getIsVerify();
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <p>{GAME_DESCRIPTION}</p>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>{START_GAME_DESCRIPTION}</h1>
        <button
          className={styles.button}
          onClick={() => navigate("/game")}
          disabled={!isVerify}
        >
          Start
        </button>
      </section>
    </div>
  );
};
