import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const socialLinksData = [
    {
      socialImg: "github.png",
      socialLink: "github.com",
    },
    {
      socialImg: "pinterest.png",
      socialLink: "github.com",
    },
    {
      socialImg: "github.png",
      socialLink: "github.com",
    },
    {
        socialImg: "linkedin.png",
        socialLink: "github.com",
      },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo__container}>
        <h1>Jazzians</h1>
      </div>
      <div className={styles.nav__links}>

        <div className={styles.nav__links__socialContainer}>
        {socialLinksData.map(social => {
            return (
                <img className={styles.nav__links__social} src={`/${social.socialImg}`} 
                alt="social-img"/>
            );
        })}
        </div>
        

        <Link href={`/`} scroll={true}>
        <h3>Explore</h3>
        </Link>
        <Link href={`/about`} scroll={false}>
        <h3>About</h3>
        </Link>
        <Link href={`/mint`} scroll={false}>
        <h3>Purchase</h3>
        </Link>
 
        <h4 className={styles.nav__address}>0x658..d93</h4>

      </div>
    </div>
  );
}

export default Navbar;
