import useSWR from "swr";

import ReactPlayer from "react-player";
import { useState } from "react/cjs/react.development";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/297762/videos?api_key=86be5b5c8582aada04344dd370e7c0b2&append_to_response=videos",
    fetcher
  );
  const [muted, setMuted] = useState(true);

  return (
    <div>
      <h1>Wonder Woman</h1>

      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${data.results[3].key}`}
          loop={true}
          playing={true}
          controls={false}
          muted={muted}
          config={{
            youtube: {
              playerVars: false,
            },
          }}
        />
      </div>
      <button onClick={() => setMuted(!muted)}>mute</button>
    </div>
  );
};

export default Header;
