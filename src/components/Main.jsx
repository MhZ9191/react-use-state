import CardLanguage from "./CardLanguage";
import Languages from "../assets/data/Languages";

export default function Main() {
  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main-container">
            <div className="main-div-lan">
              {Languages.map(({ id, title, description }) => {
                return (
                  <CardLanguage
                    key={id}
                    title={title}
                    description={description}
                  />
                );
              })}
            </div>
            <div className="main-div-output"></div>
          </div>
        </section>
      </main>
    </>
  );
}
