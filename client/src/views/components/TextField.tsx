import React, { useRef } from "react";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TextField: React.FC<Props> = ({ placeholder, handleChange, handleClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} placeholder={placeholder}/>
      <button ref={buttonRef} onClick={handleClick}>OK</button>
    </div>
  );
};