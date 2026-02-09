export default function Cardlanguage({ title, clickCard }) {
  return (
    <>
      <div className="languages-div" onClick={clickCard}>
        {title}
      </div>
    </>
  );
}
