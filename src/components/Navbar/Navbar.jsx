import clsx from "clsx";
import styles from "./Navbar.module.scss";
import { navOptions } from "../../data/navOptions";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1024) {
      setShowMenu(false);
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className="container">
        <div className={styles.navbar}>
          <p className={styles.companyName}>Nazwa Firmy</p>

          <div className={clsx(styles.menu, showMenu && styles.showMenu)}>
            <ul className={styles.navLinks}>
              {navOptions.map((option) => (
                <li className={styles.navListItem} key={nanoid()}>
                  <a
                    className={clsx(
                      styles.navOption,
                      option.isScroll ? styles.enabledLink : styles.disabledLink
                    )}
                    onClick={option.isScroll ? closeMenuOnMobile : null}
                    href={option.path}
                  >
                    {option.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.menuButton} onClick={toggleMenu}>
            {showMenu ? <IoClose /> : <IoMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
