import { Stack, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Stack
      direction="row"
      {...props}
      align="center"
      spacing={0}
      pl={2}
      alignSelf="center"
    >
      <Text color="red.500" fontSize="3xl" fontWeight="bold" p={0}>
        MYFLIX
      </Text>
    </Stack>
  );
}
