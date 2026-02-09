export default function Cardlanguage({ title, clickCard, isActive, index }) {
  return (
    <>
      <div
        className={
          isActive === index ? "languages-div active" : "languages-div"
        }
        onClick={clickCard}
      >
        {title}
      </div>
    </>
  );
}
