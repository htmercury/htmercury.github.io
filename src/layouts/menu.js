import React from "react";
import styles from "../styles/menu.module.scss";
import classnames from "classnames";
import Item from "./item";

const routes = [
  { text: "Home", path: "/" },
  { text: "Technologies", path: "/technologies/" },
  { text: "Experience", path: "/experience/" },
  { text: "Portfolio", path: "/portfolio/" },
  { text: "Notes", path: "/notes/" },
];

const Menu = ({ hide, location, close }) => (
  <menu className={classnames(styles.modal, hide ? styles.modalHide : null)}>
    <nav>
      {routes.map(r => (
        <Item
          location={location}
          text={r.text}
          path={r.path}
          active={location.pathname === r.path}
          key={r.path}
          handler={close}
        />
      ))}
    </nav>
  </menu>
);

export default Menu;
