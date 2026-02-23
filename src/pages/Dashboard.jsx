export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={cardStyle}>Total Employees</div>
        <div style={cardStyle}>Total Inventory</div>
        <div style={cardStyle}>Total Expenses</div>
        <div style={cardStyle}>Open Tickets</div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#f1f5f9",
  padding: "20px",
  borderRadius: "8px",
  flex: 1,
};