import React from "react";

type LabelType = {
  children: React.ReactNode;
  htmlFor?: string | undefined;
};

export const Label: React.FC<LabelType> = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        fontSize: "24px",
        fontWeight: "400",
        marginBottom: "7px",
        paddingLeft: "3px",
      }}
    >
      {children}
    </label>
  );
};

type InputType = {
  type?: string | undefined;
  placeholder?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputType> = ({
  type = "text",
  placeholder,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        fontSize: "20px",
        fontWeight: "400",
        background: "white",
        padding: "14px 21px",
        borderRadius: "14px",
        boxShadow: "0px 0px 5px 0px rgba(68, 49, 51, 0.25)",
      }}
      onChange={onChange}
    />
  );
};

type FormButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const FormButton: React.FC<FormButtonType> = ({ children, onClick }) => {
  return (
    <button
      style={{
        marginTop: "21px",
        width: "100%",
        padding: "14px 0",
        fontSize: "20px",
        fontWeight: "600",
        background: "#443133",
        color: "#fce4a4",
        borderRadius: "14px",
        boxShadow: "0px 0px 5px 0px rgba(68, 49, 51, 0.25)",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
