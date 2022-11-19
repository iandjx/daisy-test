import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const makeStaticTranslationProps =
  (namespaces: string[] = []) =>
  async ({ locale }: { locale?: string }) => ({
    props: { ...(await serverSideTranslations(locale!, namespaces)) },
  });
