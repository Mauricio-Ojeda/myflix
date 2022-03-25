import { Heading, Stack } from "@chakra-ui/react";
import useSWR from "swr";
import CardMainList from "../Cards/CardMainList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GenresList = () => {
  const { data: genresList, error } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=86be5b5c8582aada04344dd370e7c0b2",
    fetcher
  );

  return (
    <>
      {genresList?.genres.map((genre) => {
        return (
          <Stack
            key={genre.id}
            direction="column"
            overflow="hidden"
            wrap="nowrap"
          >
            <Stack>
              <Heading as="h3" color="black">
                {genre.name}
              </Heading>
            </Stack>
            <Stack direction="row" key={genre.id}>
              <CardMainList id={genre.id} />
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};

export default GenresList;
