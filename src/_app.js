// pages/_app.js
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // If you have a custom global CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
