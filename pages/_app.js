// #1. CSS Imports
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

// #2. Import exported ContextProvider from 'context' folder
import { ContextProvider } from '../context'

// #3. App export with JSX Return
export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
