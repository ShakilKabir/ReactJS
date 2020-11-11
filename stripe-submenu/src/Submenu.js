import React from "react";
import { useGlobalContext } from "./Context";
import data from "./data";

export default function Submenu() {
  const { isSubmenuOpen, navData } = useGlobalContext();
  const { displayCenter, displayTop, displayText } = navData;

  const newData = data.filter((item) => {
    return item.page === displayText;
  });
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      style={{ top: displayTop, left: displayCenter }}
    >
      {newData.map((item, index) => {
        return (
          <section key={index}>
            <h4>{item.page}</h4>
            {item.links.map((link, index) => {
              const { label, url, icon } = link;
              return (
                <div className="submenu-center col-2" key={index}>
                  <a href={url}>
                    {icon}
                    {label}
                  </a>
                </div>
              );
            })}
          </section>
        );
      })}
    </aside>
  );
}
