export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px;"
  };
  const titleStle = {
    margin: 0, //pはデフォルトでmarginあたってる
    color: "red"
  };
  const buttonStyle = {
    backgroundColor: "#abba7a",
    border: "none",
    padding: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStle}>---inline style---</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};
