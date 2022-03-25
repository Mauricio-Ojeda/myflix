import { Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import GenresList from "../components/genres-list/GenresList";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <div>
      <Stack>
        <Header />
      </Stack>
      <Stack>
        <GenresList />
      </Stack>
    </div>
  );
}
