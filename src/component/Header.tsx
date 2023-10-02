import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Title from "./Title";

const cx = classNames.bind(styles);
const TabBar = () => {
  return (
    <div className={styles.page}>
      <Title />
      <div className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            cx(styles.navBtn, { [styles.isActive]: isActive })
          }
          to="/"
        >
          사용 방법
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cx(styles.navBtn, { [styles.isActive]: isActive })
          }
          to="/converting"
        >
          추출하기
        </NavLink>
      </div>
    </div>
  );
};
export default TabBar;
