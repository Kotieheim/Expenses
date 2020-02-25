import React from "react";
import "./Transaction.css";

export default function Transaction() {
  return (
    <div>
      <div className="transaction">
        <li class="minus">
          Cash <span>-$ (placeholder)</span>
          <button class="delete-btn">x</button>
        </li>
        <li class="minus">
          Cash <span>-$ (placeholder)</span>
          <button class="delete-btn">x</button>
        </li>
      </div>
    </div>
  );
}
