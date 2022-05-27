import { string } from "prop-types";
import React from "react";
import styles from "./InputSelectDuration.module.css";

function InputSelectDuration() {
  const yearRange = [1922, 2022];
  const generateYears = (yearRange) => {
    let years = [];
    let currentYear = yearRange[1];
    let startYear = yearRange[0];
    while (currentYear >= startYear) {
      let value = currentYear--;
      years.push(value);
    }
    return years;
  };

  return (
    <>
      <div className={styles.duration}>
        <span className={styles.w100}>
          <select name="month" className={styles.w100}>
            <option value=""> Month</option>
            <option value="01"> January</option>
            <option value="02"> February</option>
            <option value="03"> March</option>
            <option value="04"> April</option>
            <option value="05"> May</option>
            <option value="06"> June</option>
            <option value="07"> July</option>
            <option value="08"> August</option>
            <option value="09"> September</option>
            <option value="10"> October</option>
            <option value="11"> November</option>
            <option value="11"> December</option>
          </select>
        </span>
        <span className={styles.w100}>
          <select name="year" className={styles.w100}>
            <option value="">Year</option>
            {generateYears(yearRange).map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </span>
      </div>
    </>
  );
}

export default InputSelectDuration;
