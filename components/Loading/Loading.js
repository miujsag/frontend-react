import "./Loading.css";

export default function Loading({ isActive }) {
  return (
    <>
      {isActive ? (
        <div className="loading">
          <div></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
