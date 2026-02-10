import React, { useState } from "react";
import styles from "./AuthModal.module.css";

export const BitcoinPaymentModal = ({
  modalVisible,
  updateVisibility,
  btcAddress,
  amount
}) => {
  const [copied, setCopied] = useState(false);

  if (!modalVisible) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(btcAddress.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalView}>
        <span
          className="material-icons"
          style={{ width: "100%", textAlign: "start", cursor: "pointer" }}
          onClick={updateVisibility}
        >
          close
        </span>
        <p className={styles.modalState}>
          Please send <strong>{amount}</strong> worth of {btcAddress.name} to the address below to complete payment:
        </p>
        <div
          style={{
            padding: "10px",
            borderRadius: "5px",
            wordBreak: "break-all",
            marginBottom: "10px",
            fontSize: "14px",
            fontFamily: "monospace",
            color:'green'
          }}
        >
          {btcAddress.address}
        </div>
        <div className={styles.modalButtonContainer}>
          <button
            className={styles.acceptBtn}
            style={{ marginBottom: "10px", position: "relative" }}
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy Address"}
            
          </button>
        </div>
      </div>
    </div>
  );
};

