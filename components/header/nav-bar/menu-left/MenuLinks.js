import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      h={["500px", "500px", "100%", "100%"]}
      zIndex={2000}
    >
      <Stack direction="row">
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/MyList">MyList</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
