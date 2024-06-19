import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

import { Svg } from "./styles";

function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { name: "Home", href: "#" },
          { name: "Sobre", href: "#about" },
          { name: "Experiência", href: "#works" },
          { name: "Projetos", href: "#projects" },
          { name: "Contato", href: "#contact" },
        ].map((text) => (
          <ListItem key={text.name} disablePadding>
            <a href={text.href} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemText primary={text.name} sx={{ color: "#000000" }} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 24 24"
        onClick={toggleDrawer(true)}
      >
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2"
          d="M4 18h16M4 12h16M4 6h16"
        ></path>
      </Svg>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default Menu;
