import { useState } from "react";
import CardLanguage from "./CardLanguage";
import Languages from "../assets/data/Languages";

export default function Main() {
  const [active, setActive] = useState(0);

  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main-container">
            <div className="main-div-lan">
              {Languages.map(({ id, title }, index) => {
                return (
                  <CardLanguage
                    key={id}
                    title={title}
                    clickCard={() => setActive(index)}
                  />
                );
              })}
            </div>
            <div className="main-div-output">
              {Languages[active].description}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
