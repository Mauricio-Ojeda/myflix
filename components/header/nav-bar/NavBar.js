import { Container, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import LeftMenu from "./menu-left/LeftMenu";
import RightMenu from "./menu-right/RightMenu";

const NavBar = () => {
  return (
    <Container maxWidth="2400px" p={0}>
      <Stack
        as="nav"
        direction="row"
        bgGradient="linear(to-b, #141414, transparent)"
        h="65px"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        maxW="2400px"
        position="fixed"
        zIndex={999}
      >
        <Stack direction="row" align="center" pl="10">
          <Logo alignSelf="center" justify="left" mt={1} pr="8" />
          <LeftMenu />
        </Stack>
        <Stack direction="row" align="center" pr="12">
          <RightMenu />
        </Stack>
      </Stack>
    </Container>
  );
};

export default NavBar;
