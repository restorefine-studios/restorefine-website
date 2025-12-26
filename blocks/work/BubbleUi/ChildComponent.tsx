import React from "react";

interface ChildComponentProps {
  data: React.ReactElement;
  setClick: (data: React.ReactElement) => void;
  className?: string;
}

export default function ChildComponent({ data, setClick, className }: ChildComponentProps) {
  return (
    <div className={`childComponent ${className || ""}`} onClick={() => setClick(data)}>
      {data}
    </div>
  );
}
