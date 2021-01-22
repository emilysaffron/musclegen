import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import NavLinks from "./NavLinks";
import Fade from "@material-ui/core/Fade";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
`;
const DropDownNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledContainer>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Options
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <NavLinks setAnchorEl={setAnchorEl} />
      </Menu>
    </StyledContainer>
  );
};

export default DropDownNav;
