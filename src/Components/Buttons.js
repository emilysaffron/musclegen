// This file should be renamed from Buttons > Button to match the component name (or vise versa)
// If it is specifically rendering menu buttons, then it should probably be renamed MenuButton
import styled from "@emotion/styled";
import { Link } from "@reach/router";

const StyledButton = styled.button`
  border-radius: 20px;
  background: #a8bbce;
  width: 250px;
  height: 150px;
  padding: 20px;
  margin: 10px;
  font-size: 50px;
  font-family: Palatino, URW Palladio L, serif;
  color: black;
  cursor: pointer;
  outline: none;
`;

const DropDownButton = styled.button`
  background: none;
  width: max-content;
  font-size: 20px;
  /* See other comment on assigning a font-family at a higher level in the hierarchy to prevent needing to do this */
  font-family: Palatino, URW Palladio L, serif;
  /* Similarly if black is what you want as the default font color, this could be assigned to the html { } selector */
  color: black;
  cursor: pointer;
  outline: none;
  border: none;
`;

const Button = ({ label, use }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");
  let dropdown = false;
  if (use === "dropdown") {
    // I admire the scalability, but if 'use' is only ever going to be "dropdown" or not "dropdown", then maybe change this prop to a boolean titled "dropdown"?
    // 'use' is quite ambiguous
    dropdown = true;
  }
  return dropdown ? (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      {/* The ternary should be here - the outer <Link> is consistent, but the button that's rendered changes */}
      <DropDownButton>{label}</DropDownButton>
    </Link>
  ) : (
    <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
      <StyledButton>{label}</StyledButton>
    </Link>
  );
};

export default Button;
