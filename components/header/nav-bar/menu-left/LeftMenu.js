import { Container, Stack, Text } from "@chakra-ui/react";
import { useState } from "react/cjs/react.development";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";

const LeftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Stack justifySelf="flex-start">
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Stack>
  );
};

export default LeftMenu;
