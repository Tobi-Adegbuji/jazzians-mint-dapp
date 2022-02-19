import React from "react";
import styles from "../styles/NftCard.module.css";
import Tilt from "react-parallax-tilt";

function NftCard(props) {
    console.log(props.tilt)
  return (
    <Tilt
      tiltEnable={props.tilt == undefined ? false : true}
      glareEnable={props.glare == undefined ? false : true}
      glarePosition="all"
      tiltReverse={false}
    >
      <div className={styles.card}>
        {props.img ? (
          <img src={`/${props.img}`} className={styles.card__img} />
        ) : (
          <img
            className={styles.card__img}
            style={{ padding: "50px" }}
            src={"/question.jpg"}
            alt=""
          />
        )}
        <div className={styles.card__info}>
          <p>Jazzians</p>
          <div className={styles.card__details}>
            <div className={styles.nft__number}>
              <p>Jazzian</p>
              <p style={{ marginLeft: "8px" }}>#?</p>
            </div>

            <div className={styles.card_pricing}>
              <p>.02</p>
              <img src="/eth.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default NftCard;
