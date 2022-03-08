import React from "react";
import Link from "next/link";
import styles from "@styles/ButtonContact.module.sass";

export default function ButtonContact() {
  return (
    <div className={styles.buttonContact__container}>
      <Link href="/contact">
        <a>CONTACT US!</a>
      </Link>
    </div>
  );
}
