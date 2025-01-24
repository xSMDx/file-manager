// pages/_app.js
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // If you have a custom global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
