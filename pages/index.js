import getConfig, { setConfig } from "next/config";
function MyImage() {
  // Only holds serverRuntimeConfig and publicRuntimeConfig
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
  // Will only be available on the server-side
  console.log(serverRuntimeConfig);
  // Will be available on both server-side and client-side
  console.log(publicRuntimeConfig);

  return (
    <div>
      <pre>{JSON.stringify({ publicRuntimeConfig }, null, 2)}</pre>
    </div>
  );
}
MyImage.getInitialProps = () => ({});

export default MyImage;
