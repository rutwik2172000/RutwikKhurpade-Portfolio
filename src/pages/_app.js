import "@/styles/globals.scss";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { AnimatePresence, motion as m } from "framer-motion";
import StyleProvider from "@/StyleContext/StyleProvider";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  /*for getting current pathname.
 Used for framer motion navigation animation */
  const location = useRouter();

  return (
    <AnimatePresence mode="wait">
      <m.div key={location.pathname} className={inter.className}>
        {/* Pages */}
        {/* StyleProvider is a HOC to let the pages access the styles context */}
        <StyleProvider>
          <Component {...pageProps} />
        </StyleProvider>
        {/* entry black bg */}
        <m.div
          className="slideIn"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* exit black bg */}
        <m.div
          className="slideOut"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </m.div>
    </AnimatePresence>
  );
}
