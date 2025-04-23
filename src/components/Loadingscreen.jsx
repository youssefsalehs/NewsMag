function Loadingscreen({ theme }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: theme === "light" ? "#ffffff" : "#212529",
        zIndex: 9999,
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
      <span className="text-primary" style={{ fontSize: "2rem" }}>
        Loading...
      </span>
    </div>
  );
}

export default Loadingscreen;
