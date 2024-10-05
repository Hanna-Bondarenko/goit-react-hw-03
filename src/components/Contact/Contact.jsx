import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ name, number }) => {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser className={styles.icon} />
          {name}
        </p>
        <p className={styles.number}>
          <FaPhone className={styles.icon} />
          {number}
        </p>
      </div>

      <button className={styles.button}>Delete</button>
    </li>
  );
};

export default Contact;
