(() => {
  const themeStorage = localStorage.getItem("theme-storage");
  const isDarkPrefered =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const systemTheme = isDarkPrefered ? "dracula" : "light";
  const documentHTMLElement = document.documentElement;

  if (!themeStorage) {
    documentHTMLElement.setAttribute("data-theme", systemTheme);
    localStorage.setItem(
      "theme-storage",
      JSON.stringify({
        state: {
          currentTheme: "system",
          isDarkMode: isDarkPrefered,
        },
      })
    );
    return;
  }

  const { state } = JSON.parse(themeStorage);
  if (state.currentTheme === "system")
    documentHTMLElement.setAttribute("data-theme", systemTheme);
  else documentHTMLElement.setAttribute("data-theme", state.currentTheme);
})();
