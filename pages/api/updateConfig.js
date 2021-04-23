import getConfig, { setConfig } from "next/config";

const handler = (req, res) => {
  setConfig({
    publicRuntimeConfig: { test: `This has been updated! ${Date.now()}` },
  });
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  res.statusCode = 200;

  // res.json(req.app.locals.liveConfig.inspect())
  res.json({ publicRuntimeConfig, serverRuntimeConfig });
};

export default handler;
