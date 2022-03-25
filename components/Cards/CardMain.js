import Image from "next/image";
import { Stack } from "@chakra-ui/react";

import nextConfig from "../../next.config";

const CardMain = ({ image }) => {
  const src = `https:/${nextConfig.images.domains}/t/p/original${image}`;
  return (
    <Stack direction="row" overflow="hidden">
      <Image loader={() => src} src={src} width="250px" height="200px" alt="" />
    </Stack>
  );
};

export default CardMain;
