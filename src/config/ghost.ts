import GhostContentAPI from "@tryghost/content-api";

const ghost = new GhostContentAPI({
  url: process.env.GHOST_URL ?? "",
  key: process.env.GHOST_KEY ?? "",
  version: "v5.0",
});

export default ghost;
