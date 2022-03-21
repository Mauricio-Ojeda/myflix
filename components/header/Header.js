import useSWR from "swr";
import ReactPlayer from "react-player";
import { useState } from "react/cjs/react.development";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import NavBar from "./nav-bar/NavBar";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/76341/videos?api_key=86be5b5c8582aada04344dd370e7c0b2&append_to_response=videos",
    fetcher
  );
  const [muted, setMuted] = useState(true);
  console.log(data?.results);
  return (
    <Container
      maxW="2400px"
      h={["50vh", "50vh", "100vh", "100vh"]}
      overflow="hidden"
      p={0}
    >
      <NavBar />

      <Box
        h="100%"
        w="100%"
        maxW="2400px"
        transform={["scale(3) ", "scale(2)", "scale(1.4)", "scale(1.4)"]}
        zIndex={-1}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${data?.results[0].key}`}
          loop={true}
          playing={true}
          controls={false}
          muted={muted}
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        h="100%"
        w="100%"
        bg="transparent"
        maxW="2400px"
        pos="absolute"
        bottom="0"
        left="0"
        zIndex={999}
      >
        <Stack w="100%" h="100%">
          <Stack
            h="100%"
            justifyContent="flex-end"
            alignItems="flex-end"
            mr={5}
            mb={10}
            cursor="pointer"
            direction="row"
            spacing={5}
          >
            <Image
              src={muted ? "/sound-off.png" : "/sound-on.png"}
              onClick={() => setMuted(!muted)}
              alt="sound"
              width="36px"
              height="36px"
            />
            <Text color="white" fontSize="2xl" borderLeft="2px" pl={3}>
              TV-G
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default Header;
