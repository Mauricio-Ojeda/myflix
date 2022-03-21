import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to} passHref>
      <Text as="a" color="gray.50" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
