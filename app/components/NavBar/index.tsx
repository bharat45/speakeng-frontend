import { getNavData } from "@/app/lib/data";
import styles from "./NavBar.module.css";

const NavBar = async () => {
  const data = await getNavData();

  return (
    <div className={styles.container}>
      <div
        style={{ display: "flex", alignItems: "center", position: "relative" }}
      >
        <img
          src={data.data.attributes.logo.data[0].attributes.url}
          alt="logo"
          style={{ width: "auto", height: 70 }}
        />
        <img
          src={data.data.attributes.logo.data[1].attributes.url}
          alt="logo"
          style={{
            width: "auto",
            height: 50,
            position: "absolute",
            left: 115,
            top: 0,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
