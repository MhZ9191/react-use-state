import { useState } from "react";
import CardLanguage from "./CardLanguage";

export default function Main({ languages }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main-container">
            <div className="main-div-lan">
              {languages.map(({ id, title }, index) => {
                return (
                  <CardLanguage
                    key={id}
                    title={title}
                    clickCard={() => setActive(index)}
                    isActive={active}
                    index={index}
                  />
                );
              })}
            </div>
            <div className="main-div-output">
              {languages[active]?.description ||
                "Nessun linguaggio selezionato"}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
