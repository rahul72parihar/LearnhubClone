export default function HeaderRight({ openForm, mobile = false }) {
  return (
    <div className={mobile ? "mobileHeaderRight" : ""}>
      <button onClick={openForm} className="headerRightButton" type="button">
        Get Started
      </button>
    </div>
  );
}
