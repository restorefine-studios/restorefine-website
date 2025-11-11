import react from "react";

export default function ChildComponent({ data, setClick }) {
  return (
    <div className="childComponent" onClick={() => setClick(data)}>
      {data}
    </div>
  );
}
