import React, { useState } from "react";
import useSwr from "swr";
import axios from "axios";
import styles from "../styles/users.module.css";
import { useRouter } from "next/router";

function seeks({ cards }) {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  let k = cards;
  return (
    <div>
      {k?.map((i) => (
        <div className={styles.card} key={i._id}>
          <div style={{ display: "flex" }}>
            <div>
              <img src={i.userId.img} alt="hi" />
            </div>
            <div style={{ marginLeft: "5%", width: "60%" }}>
              <h3>
                Name - {i.userId.firstName} {i.userId.lastName}
              </h3>
              <h3>Seeking title - {i.title}</h3>
              <h4>City - {i.city}</h4>
            </div>
          </div>
          <div></div>
          <button
            className={styles.btn}
            onClick={() => {
              router.push(`/seekcard/${i._id}`);
            }}
          >
            Pledge
          </button>
        </div>
      ))}
    </div>
  );
}

export default seeks;