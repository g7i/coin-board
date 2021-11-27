import React from "react";
import "./button.css";

type ButtonProps = {
  label: string,
  Icon: React.ComponentType<any>,
  onClick?: (e: any) => any,
};

export default function Button({ label, Icon, onClick }: ButtonProps) {
  return (
    <span onClick={onClick} className="btn-container">
      <Icon size={22} />
      <span className="label">{label}</span>
    </span>
  );
}
