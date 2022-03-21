import { Container, Stack, Text } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const RightMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Stack>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Stack>
  );
};

export default RightMenu;
