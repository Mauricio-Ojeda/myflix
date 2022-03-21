import { Box } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? (
        <AiOutlineClose color="#EDF2F7" size={22} />
      ) : (
        <AiOutlineMenu color="#EDF2F7" size={22} />
      )}
    </Box>
  );
};

export default MenuToggle;
