import { useState } from "react";
export default function Cardlanguage({ title, clickCard, isActive, index }) {
  const [over, setOver] = useState(false);
  return (
    <>
      <div
        className={`
            languages-div
          ${isActive === index ? "active" : ""}
          ${over ? "active" : ""}
          `}
        onClick={clickCard}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
      >
        {title}
      </div>
    </>
  );
}
