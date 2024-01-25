import React from "react";

import styles from "./CommonComponent.module.css";

const CommonComponent = ({
  currentTips,
  totalTips,
  fontFamily,
  background,
  title,
  info,
  img,
  arrow,
  link,
  leftBottomImg,
  rightBottomImg,
}) => {
  return (
    <section
      className={styles.wrapper}
      style={{ fontFamily: fontFamily, background: background }}
    >
      {0 < currentTips && (
        <p className={styles.currentTips}>{`${currentTips} / ${totalTips}`}</p>
      )}
      <div className={styles.headingContainer}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        {info && <p className={styles.info}>{info}</p>}
      </div>

      <div className={styles.bottomContainer}>
        <img src={leftBottomImg} alt="#" className={styles.leftBottomImg} />
        <div className={styles.imgContainer}>
          <img src={img} alt="#" className={styles.img} />
          <a href="#/" className={[styles.arrowContainer].join(" ")}>
            <i className={arrow}></i>
          </a>{" "}
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={styles.linkContainer}
          >
            {link}
          </a>
        </div>
        <img src={rightBottomImg} alt="#" className={styles.rightBottomImg} />
      </div>
    </section>
  );
};

export default CommonComponent;
