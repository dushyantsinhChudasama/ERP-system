import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			padding: "10px 20px",
			borderBottom: "1px solid #e5e7eb",
			background: "#fff"
		}}>
			<div style={{ fontWeight: 700 }}>ERP System</div>
			<button
				onClick={() => setOpen((v) => !v)}
				style={{ padding: "6px 10px", borderRadius: 6 }}
				aria-expanded={open}
			>
				{open ? "Close" : "Menu"}
			</button>
		</nav>
	);
}
