import React, { useState } from "react";
import Logo from "./images/logo.png";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  
} from "@mui/material";
import {  Stack } from "@mui/system";


const headerStyle = {
  borderBottomRightRadius: "50px",
  borderBottomLeftRadius: "50px",
  background: "#002175",
  height: "13vh",
  display: "flex",
  justifyContent: "center",
  padding: "40px",
  overflowX: "hidden",
  overflowY: "hidden"
};

const pages = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/About",
    name: "About",
  },
  {
    route: "/Services",
    name: "Services",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
 

  const title = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "32px",
    lineHeight: "48px",
    letterSpacing: "0.03em",
    textTransform: "capitalize",
    display: isMatchSm ? "none" : null
  };
  const pageStyle = {
    fontFamily: "Catamaran",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.03em",
    textTransform: "capitalize",
    color: "#FFFFFF",
  };
  return (
    <>

      <AppBar position="sticky" sx={headerStyle}>
        <Toolbar>
          <Stack direction="row" spacing={2}>
            <img src={Logo} style={{ height: isMatchSm ? "40px" : null }} />
            <Typography sx={title}>E-Care</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={6}
            sx={{ ml: isMatchSm ? null : "auto" }}
          >
            {pages.map((page) => {
              return (
                <>
                  <Link to={page.route}>
                    <Button variant="text" sx={pageStyle}>
                      {page.name}
                    </Button>
                  </Link>
                </>
              );
            })}
<Link to="/adminlogin" style={{textDecoration:"none"}}>
            <Button
              
              variant="contained"
              sx={{
                color: "#000000",
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "24px 24px 50px 50px",
                display: isMatchSm ? "none" : null
              }}
            >
              Admin
            </Button>
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Header;
