import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { verifyService } from "../../services/verify-service";
import { useState } from "react";

const chekIsActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : "";

export const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>();

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const isVerify = verifyService.getIsVerify();

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`${styles.menuButton} ${isOpenMenu ? styles.open : ""}`}
      >
        Menu
      </button>
      <nav className={styles.nav}>
        <NavLink to={"/"} className={chekIsActive}>
          Main
        </NavLink>
        {isVerify ? (
          <NavLink to={"/game"} className={`${chekIsActive}`}>
            Game
          </NavLink>
        ) : (
          <a className={styles.disabled}>Game</a>
        )}
        <NavLink to={"/privacy"} className={chekIsActive}>
          Privacy policy
        </NavLink>
        <NavLink to={"/terms"} className={chekIsActive}>
          Terms and conditions
        </NavLink>
        <NavLink to={"/cookie"} className={chekIsActive}>
          Cookie Privacy
        </NavLink>
        <NavLink to={"/blog"} className={chekIsActive}>
          Blog
        </NavLink>
      </nav>

      {isOpenMenu ? (
        <nav className={styles.mobileMenu}>
          <NavLink to={"/"} className={chekIsActive} onClick={closeMenu}>
            Main
          </NavLink>
          {isVerify ? (
            <NavLink to={"/game"} className={`${chekIsActive}`}>
              Game
            </NavLink>
          ) : (
            <a className={styles.disabled}>Game</a>
          )}
          <NavLink to={"/privacy"} className={chekIsActive} onClick={closeMenu}>
            Privacy policy
          </NavLink>
          <NavLink to={"/terms"} className={chekIsActive} onClick={closeMenu}>
            Terms and conditions
          </NavLink>
          <NavLink to={"/cookie"} className={chekIsActive} onClick={closeMenu}>
            Cookie Privacy
          </NavLink>
          <NavLink to={"/blog"} className={chekIsActive} onClick={closeMenu}>
            Blog
          </NavLink>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};
