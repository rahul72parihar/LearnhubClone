export default function HeaderRight({ openForm }) {
  return (
    <div>
      <button onClick={openForm} className="headerRightButton">
        Get Started
      </button>
    </div>
  );
}
