import "@/styles/globals.css";
import { Inter } from "next/font/google"; // para importar tipografias de google que se carguen rapido
import { AppContextProvider } from "@/contexts/AppContext"; // el @ significa que va a tomar la carpeta src

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
      </main>
    </AppContextProvider>
  );
}
