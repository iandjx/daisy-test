import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100..700&family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        {/* NProgress styles */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/*
         * Initial theme selection, to avoid FOUC
         * You must use `dangerouslySetInnerHTML` to
         * send the script inline with the initial html
         */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{const e=localStorage.getItem("theme-storage"),t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=t?"dracula":"light",r=document.documentElement;if(!e)return r.setAttribute("data-theme",a),void localStorage.setItem("theme-storage",JSON.stringify({state:{currentTheme:"system",isDarkMode:t}}));const{state:s}=JSON.parse(e);"system"===s.currentTheme?r.setAttribute("data-theme",a):r.setAttribute("data-theme",s.currentTheme)})();',
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
