import { useEffect, useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

const themesData = {
  lightThemes: ["light"] as const,
  darkThemes: ["dracula"] as const,
};

export const themes = [
  ...themesData.lightThemes,
  ...themesData.darkThemes,
] as const;
export type ThemesType = typeof themes[number] | "system";

type State = { currentTheme: ThemesType | ""; isDarkMode?: boolean };
type Actions = { changeTheme: (newTheme: ThemesType) => void };

const defaultThemeStoreValues: State = {
  currentTheme: "",
};

const localTheme = create<State & Actions>()(
  persist(
    (set) => ({
      ...defaultThemeStoreValues,

      changeTheme(newTheme) {
        const isSystem = newTheme === "system";
        const isDarkMode = isSystem
          ? getSystemTheme() === "dracula"
          : !!themesData.darkThemes.find((el) => el === newTheme);
        document.documentElement.setAttribute(
          "data-theme",
          isSystem ? getSystemTheme() : newTheme
        );

        set((state) => ({
          ...state,
          currentTheme: newTheme,
          isDarkMode: isDarkMode,
        }));
      },
    }),
    { name: "theme-storage" }
  )
);

export function useCurrentTheme() {
  const { currentTheme, isDarkMode } = localTheme((state) => ({
    currentTheme: state.currentTheme,
    isDarkMode: state.isDarkMode,
  }));

  const [theme, setTheme] = useState<State>(defaultThemeStoreValues);
  useEffect(
    () => setTheme({ currentTheme, isDarkMode }),
    [currentTheme, isDarkMode]
  );

  return theme;
}

export function useChangeTheme() {
  return localTheme((state) => state.changeTheme);
}

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dracula"
    : "light";
}
