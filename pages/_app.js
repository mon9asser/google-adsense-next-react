import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app/globals.css'; // Optional: Include your custom global styles

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}