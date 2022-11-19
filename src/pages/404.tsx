import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import "twin.macro";

import { ErrorPage } from "@/components/Error";
import { makeStaticTranslationProps } from "@/helpers";

export const getStaticProps: GetStaticProps = makeStaticTranslationProps([
  "common",
]);

const FourOhFour: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <ErrorPage
        statusCode={404}
        title={t("error.404.title")}
        subTitle={t("error.404.subtitle")}
        buttonText={t("global.goToHomepage")}
      />
    </>
  );
};

export default FourOhFour;
