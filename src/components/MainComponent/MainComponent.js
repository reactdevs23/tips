import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  arrow,
  initialPage,
  leftBottomImg,
  rightBottomImg,
}) => {
  return (
    <section
      className={styles.wrapper}
      style={{
        fontFamily: initialPage.fontFamily,
        background: initialPage.background,
      }}
    >
      <h1 className={styles.title}>
        <span className={styles.highlight}>
          {initialPage.title.numberofTips}
        </span>{" "}
        <br />
        {initialPage.title.reason}
      </h1>

      <div className={styles.bottomContainer}>
        <img src={leftBottomImg} alt="#" className={styles.leftBottomImg} />
        <div className={styles.imgContainer}>
          <img src={initialPage.img} alt="#" className={styles.img} />
          <a href="#" className={styles.arrowContainer}>
            <i className={arrow}></i>
          </a>
          <a
            href={initialPage.link}
            target="_blank"
            rel="noreferrer"
            className={styles.linkContainer}
          >
            {initialPage.link}
          </a>
        </div>
        <img src={rightBottomImg} alt="#" className={styles.rightBottomImg} />
      </div>
    </section>
  );
};

export default MainComponent;
