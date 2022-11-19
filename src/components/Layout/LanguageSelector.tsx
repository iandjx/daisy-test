import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

import frFlag from "@/assets/Flag_of_France.svg";
import ukFlag from "@/assets/Flag_of_the_UK.svg";

import { CustomImage } from "../shared/CustomImage";
import { ResponsiveFixedContainer } from "./Page";

const LanguageButton = styled("button", {
  ...tw`relative h-6 w-6 text-sm transition-all`,
  ...tw`rounded-full overflow-hidden border border-base-content`,
  ...tw`ring-0 ring-transparent ring-offset-4 ring-offset-base-100`,
});

const languagesList = [
  { lang: "en", image: ukFlag },
  { lang: "fr", image: frFlag },
] as const;
export type Language = typeof languagesList[number]["lang"];

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const { pathname, asPath, query, push } = useRouter();

  const clickHandler = (lang: Language) => {
    push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <ResponsiveFixedContainer tw="right-8 bottom-8">
      {languagesList.map(({ lang, image }, idx) => {
        return i18n.language !== lang ? (
          <LanguageButton
            key={idx}
            type="button"
            title={t(`language.${lang}.switch`)}
            onClick={() => clickHandler(lang)}
          >
            <CustomImage src={image} alt={t(`language.${lang}.flagAlt`)} />
          </LanguageButton>
        ) : null;
      })}
    </ResponsiveFixedContainer>
  );
};
