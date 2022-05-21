import React from "react";
import styles from "./ExperienceSummaryCard.module.css";
import { faPencil, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceSummaryCard() {
  return (
    <>
      <article>
        <div class={styles.expHeader}>
          <h2>Experience</h2>
          <span className={styles.expPlus}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span>
            <FontAwesomeIcon icon={faPencil} />
          </span>
        </div>
      </article>
    </>
  );
}

export default ExperienceSummaryCard;
