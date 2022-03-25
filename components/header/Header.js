import useSWR from "swr";
import ReactPlayer from "react-player";
import { useState } from "react/cjs/react.development";
import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import NavBar from "./nav-bar/NavBar";
import Image from "next/image";
import { FaPlay, FaPlus } from "react-icons/fa";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
  const { data: video, error } = useSWR(
    "https://api.themoviedb.org/3/movie/76341/videos?api_key=86be5b5c8582aada04344dd370e7c0b2&append_to_response=videos",
    fetcher
  );
  const { data: movieDetails, err } = useSWR(
    "https://api.themoviedb.org/3/movie/76341?api_key=86be5b5c8582aada04344dd370e7c0b2",
    fetcher
  );
  const [muted, setMuted] = useState(true);
  console.log(movieDetails?.title);
  return (
    <Container
      maxW="2400px"
      h={["50vh", "50vh", "100vh", "100vh"]}
      overflow="hidden"
      p={0}
    >
      <Stack zIndex={10000}>
        <NavBar />
      </Stack>

      <Box
        h="100%"
        w="100%"
        maxW="2400px"
        transform={["scale(3) ", "scale(2)", "scale(1.4)", "scale(1.4)"]}
        zIndex={-1}
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video?.results[0].key}`}
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
        zIndex={800}
      >
        <Stack
          h="100vh"
          w="100%"
          justifyContent="space-between"
          alignItems="flex-end"
          mr={12}
          pb="28"
          direction="row"
        >
          <Stack color="white" direction="column" pl={12}>
            <Text as="h1" fontSize="5xl" maxW="450px">
              {movieDetails?.title}
            </Text>
            <Text as="p" maxW="370px" fontSize="lg" lineHeight="short">
              {movieDetails?.overview}
            </Text>
            <Stack spacing={4} direction="row" align="center" pt={26}>
              <Button
                leftIcon={<FaPlay />}
                color="#141414"
                bg="white"
                size="lg"
                _focus={{ display: "none" }}
                _hover={{
                  opacity: "0.85",
                  background: "gray.300",
                }}
              >
                Play
              </Button>
              <Button
                leftIcon={<FaPlus color="white" />}
                bg="#757575"
                size="lg"
                _focus={{ display: "none" }}
                _hover={{
                  opacity: "0.8",
                }}
              >
                My List
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" mb={5} pr={12}>
            <Stack cursor="pointer">
              <Image
                src={muted ? "/sound-off.png" : "/sound-on.png"}
                onClick={() => setMuted(!muted)}
                alt="sound"
                width="36px"
                height="36px"
              />
            </Stack>
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
