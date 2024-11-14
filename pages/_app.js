// pages/_app.js
import { GoogleAdSense } from "nextjs-google-adsense";

const App = ({ Component, pageProps }) => {
  
  var publisher_id = '';
  if( pageProps.ads) {
    publisher_id = pageProps.ads[0]['data-ad-client'];
  }

  return (
    <>
      <GoogleAdSense publisherId={publisher_id} />
      <Component {...pageProps} />
    </>
  );
};

export default App;