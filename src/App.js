import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./styles.css";

export default function App() {
  return (
    <SpotifyPlayer
      token="BQBtgcz5J2lWPy5dFuJXuvspbZjqwERicvcTgtn51FcvCLgNfp0rSIbLxgcsYvAkTUulASaRafaBqV3Z-kT3W3Y2NL-51C_PiguI1ukPM73lHwTv4ZPkGrrYJnMD58D_ThBkykYtu_myupLSZUrESDEQmVglpqvg2-gvbsU9obb9Jq0J6FT8"
      uris={["spotify:artist:6HQYnRM4OzToCYPpVBInuU"]}
    />
  );
}
