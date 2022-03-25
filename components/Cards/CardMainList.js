import { Stack } from "@chakra-ui/react";
import useSWR from "swr";

import CardMain from "./CardMain";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CardMainList = ({ id }) => {
  const { data: genresResults, err } = useSWR(
    `https://api.themoviedb.org/4/list/${id}?api_key=86be5b5c8582aada04344dd370e7c0b2`,
    fetcher
  );

  const movies = genresResults?.results;
  console.log(movies);

  return (
    <>
      {movies?.map((movie) => {
        return (
          <Stack key={movie.id}>
            <CardMain image={movie.poster_path} />
          </Stack>
        );
      })}
    </>
  );
};

export default CardMainList;
