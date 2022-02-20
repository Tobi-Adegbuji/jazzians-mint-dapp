import React from "react";
import styles from "../styles/NftCard.module.css";
import Tilt from "react-parallax-tilt";

function NftCard(props) {
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
          <div className={styles.card__img}>
            <h1>?</h1>
          </div>
        )}
        <div className={styles.card__info}>
          <p>Jazzians</p>
          <div className={styles.card__details}>
            <div className={styles.nft__number}>
              <p>Jazzian</p>
              <p style={{ marginLeft: "8px" }}>
                {props.nftId > 0 ? `#${props.nftId}` : "#?"}
                </p>
            </div>

            <div className={styles.card_pricing}>
              <p>{props.mintPrice}</p>
              <img src="/eth.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}




export default NftCard;
