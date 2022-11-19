import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import tw, { styled } from "twin.macro";

import {
  themes,
  useChangeTheme,
  useCurrentTheme,
} from "@/helpers/hooks/useCurrentTheme";

import { ResponsiveFixedContainer } from "./Page";

const ThemeButton = styled("button", {
  ...tw`h-6 w-6 rounded-full border border-base-content transition-all`,
  ...tw`ring-0 ring-transparent ring-offset-4 ring-offset-base-100`,
  ...tw`[&.active]:(ring-2 ring-secondary)`,
  variants: {
    theme: {
      system: tw`bg-base-100`,
      light: tw`bg-white`,
      dracula: tw`bg-indigo-400`,
    },
  },
});

export function ThemeSelector() {
  const { currentTheme } = useCurrentTheme();
  const changeTheme = useChangeTheme();

  const { t } = useTranslation("common");

  // Change theme when system theme updates
  useEffect(
    () => {
      const setSystemTheme = (e?: MediaQueryListEvent) => {
        if (currentTheme === "system") changeTheme("system");
      };

      const mq = window.matchMedia("(prefers-color-scheme: dark)");

      mq.addEventListener("change", setSystemTheme);
      return () => mq.removeEventListener("change", setSystemTheme);
    },
    // You need this dependencies or the listener will never update current theme value
    [currentTheme, changeTheme]
  );

  return (
    <ResponsiveFixedContainer tw="left-8 bottom-8">
      <ThemeButton
        type="button"
        title={t("themes.activate.default")}
        className={currentTheme === "system" ? "active" : ""}
        theme={"system"}
        onClick={() => changeTheme("system")}
      >
        <div tw="w-full h-0.5 bg-base-content -rotate-45" />
      </ThemeButton>

      {themes.map((theme) => (
        <ThemeButton
          type="button"
          title={t("themes.activate.withName", { name: theme })}
          className={theme === currentTheme ? "active" : ""}
          key={theme}
          theme={theme}
          onClick={() => changeTheme(theme)}
        />
      ))}
    </ResponsiveFixedContainer>
  );
}
